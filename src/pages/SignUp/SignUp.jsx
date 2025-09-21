import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContextValue } from "../../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.scss";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, loading, handleRegister } = useAuthContextValue();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword);
    handleRegister({ username, email, password });
  };
  return (
    <div className="signUp">
      <div className="card">
        <div className="left">
          {error && <p className="error">{error}</p>}
          <h1>SignUp</h1>
          <form onSubmit={submitHandler} className="loginForm">
            <div className="inputItems">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password or min Length 6"
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
            <div className="inputItems">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password or min Length 6"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
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
                  Signing Up...
                </button>
              ) : (
                <button type="submit">Sign Up</button>
              )}
            </div>
          </form>
        </div>
        <div className="right">
          <h1>Social Hub.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
            ipsam sed debitis excepturi iste. voluptatibus porro! Libero, ut
            earum. Illo, quos ut.
          </p>
          <div className="button-container">
            <p>Do you have an account ?</p>
            <Link to="/signin" className={loading ? "disabled" : ""}>
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
