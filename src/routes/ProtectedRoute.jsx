import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContextValue } from "../context/authContext";
import MainLoader from "../components/Loaders/MainLoader";

export default function ProtectedRoute({
  children,
  isProtectionRequired = true,
}) {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthContextValue();
  // 👆 assume your AuthProvider exposes a proper "loading" state while checking session

  useEffect(() => {
    if (loading) return; // wait until auth state is resolved

    if (isProtectionRequired && !isAuthenticated) {
      //user access home page but use is not loginin/have no session
      navigate("/signin", { replace: true });
    } else if (!isProtectionRequired && isAuthenticated) {
      //user access login page but use is loginin already
      navigate("/", { replace: true });
    }
  }, [isProtectionRequired, isAuthenticated, loading, navigate]);

  if (loading) {
    return <MainLoader />; // show loader until auth is checked
  }

  return children;
}
