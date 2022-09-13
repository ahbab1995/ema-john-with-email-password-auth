import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handelEmailBlur = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handelUserLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from,{replace : true});
  }

  return (
    <div className="form-container">
      <div className="main-area">
        <h2 className="form-title">Login</h2>

        <form onSubmit={handelUserLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onBlur={handelEmailBlur}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onBlur={handelPasswordBlur}
              placeholder="Enter Your Password"
              required
            />
          </div>

          <p style={{ color: "red" }}>{error?.message}</p>
          {
            loading && <p>Loading ...</p>
          }

          <input className="btn" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
