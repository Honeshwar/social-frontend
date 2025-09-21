import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import { useAuthContextValue } from "../../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { error, loading, handleSignin } = useAuthContextValue();

  const submitHandler = (e) => {
    e.preventDefault();
    handleSignin({ email, password });
    toast.success("Signin successfully");
  };
  return (
    <div className="signIn">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
            ipsam sed debitis excepturi iste. voluptatibus porro! Libero, ut
            earum. Illo, quos ut.
          </p>
          <div className="button-container">
            <p>Do you have an account ?</p>
            <Link to="/signup" className={loading ? "disabled" : ""}>
              Register
            </Link>
          </div>
        </div>
        <div className="right">
          {error && <p className="error">{error}</p>}
          <h1>SignIn</h1>
          <form
            action=""
            method="post"
            className="loginForm"
            onSubmit={submitHandler}
          >
            <div className="inputItems">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputItems">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                value={password}
              />
              <span
                className="toggleIcon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="btn">
              {loading ? (
                <button type="button" className="loading" disabled>
                  <span className="spinner"></span>
                  Signing In...
                </button>
              ) : (
                <button type="submit">Sign In</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
