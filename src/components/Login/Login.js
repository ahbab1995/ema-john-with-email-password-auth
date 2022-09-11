import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container">
      <div className="main-area">
        <h2 className="form-title">Login</h2>

        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id=""
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
