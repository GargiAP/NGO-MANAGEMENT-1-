import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './loginpage.css';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1 className="login-title">Welcome Back!</h1>
        <form className="login-form">
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="login-subtitle">Do Not Have an Account?</p>
        <p className="login-subtitle">Create Account</p>
      </div>
      <div className="login-right">
        <div className="design-container">
          <h2>Explore More</h2>
          <p>Stay connected with our community.</p>
          <img src="https://via.placeholder.com/300" alt="Random Design" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
