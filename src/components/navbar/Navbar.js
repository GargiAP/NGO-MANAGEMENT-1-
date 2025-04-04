import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';  

const Navbar = ({ onLoginClick, onSigninClick }) => {
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

      <div className="button-container">
      <button onClick={onLoginClick}>Login</button>
        <button onClick={onSigninClick}>Sign In</button>

      </div>
    </nav>
  );
};

export default Navbar;
