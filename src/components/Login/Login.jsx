import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Add styling for the login page

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
