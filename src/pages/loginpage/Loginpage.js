import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './loginpage.css';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <form className="login-card">
        <h1 className="login-title">Login</h1>

        {}
        <div className="flex-input-group">
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <button className="login-button" type="submit">Login</button>
        <div className="login-subtext">
          <p>Don’t have an account?</p>
           <Link to="/signin" className="create-account">Create Account</Link>
        </div>

      </form>
    </div>
  );
};

export default LoginPage;
