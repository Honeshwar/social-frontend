import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import request_API from "../api/customFetchAPI";

//create context
const context = createContext();

// custom Provider component create
export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState(null);
  const [register, setRegister] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (register) {
      console.log(register);
      const registerUser = async () => {
        setLoading(true);
        const Data = await request_API.auth.register(register);
        console.log("new user created", Data);
        setRegister(null);
        setLoading(false);
        if (Data.success) return navigate("/signin");
        setError(Data.error);
      };
      registerUser();
    }
  }, [register, navigate]);
  useEffect(() => {
    if (signIn) {
      const findUser = async () => {
        setLoading(true);
        const data = await request_API.auth.signin(signIn);
        console.log("signin data: ", data);
        setSignIn(null);
        if (!data.success) {
          setError(data.error);
          return;
        }
        setUser(data?.data);
        setIsAuthenticated(true);
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      };
      findUser();
    }
  }, [signIn, navigate]);
  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userInLocalStorage) {
      setUser(userInLocalStorage);
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    console.log("user", user);
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else if (user && !isAuthenticated) {
      localStorage.removeItem("user");
    }
  }, [isAuthenticated, user]);

  const handleRegister = ({ username, email, password }) => {
    setRegister({ username, email, password });
  };

  const handleSignin = ({ email, password }) => {
    setSignIn({ email, password });
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    navigate("/signin");
  };
  return (
    <context.Provider
      value={{
        isAuthenticated,
        user,
        error,
        loading,
        handleRegister,
        handleSignin,
        handleLogout,
      }}
    >
      {children}
    </context.Provider>
  );
}

//get context
export const useAuthContextValue = () => {
  return useContext(context);
};
