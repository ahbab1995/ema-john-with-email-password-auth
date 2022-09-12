import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

  const handelEmailBlur = (e) => {
    const emailInput = e.target.value;
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail(emailInput);
    } else {
      setError("Please Provide a valid Email");
    }
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handelConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handelCreateUser = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      setError("Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email,password)
  };

  if(user){
    navigate('/shop')
  }

  return (
    <div className="form-container">
      <div className="main-area">
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handelCreateUser}>
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

          <div className="input-group">
            <label htmlFor="Confirm-password">Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              onBlur={handelConfirmPasswordBlur}
              placeholder="Enter Your Confirm Password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input className="btn" type="submit" value="Sign Up" />
        </form>
        <p>
          New to Ema-John?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
