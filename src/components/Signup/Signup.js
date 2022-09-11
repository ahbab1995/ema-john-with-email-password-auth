import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className="form-container">
      <div className="main-area">
        <h2 className="form-title">Sign Up</h2>

        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="Confirm-password">Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Enter Your Confirm Password"
              required
            />
          </div>

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