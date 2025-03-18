import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/volunteer">Volunteer</a></li>
        <li><a href="/donation">Donation</a></li>
      </ul>

      <div className="auth-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
