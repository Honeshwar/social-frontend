import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import { useAuthContextValue } from "../../context/authContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, handleSignin } = useAuthContextValue();
  console.log("error signin", error);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleSignin({ email, password });
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
          <p>Do you have an account ?</p>
          <Link to="/signup">Register</Link>
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <div className="btn">
              <button type="submit">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
