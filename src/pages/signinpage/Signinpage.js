import React from 'react';
import { FaUser, FaLock, FaCalendarAlt , FaPhoneAlt, FaEnvelope, FaVenusMars, FaMapMarkerAlt } from 'react-icons/fa';
import './signinpage.css';

const SigninPage = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-left">
        <h1 className="signin-title">Create Your Profile</h1>
        <form className="signin-form">
        <div className="inline-container">
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input type="number" placeholder="Age" required />
          </div>
          </div>
          <div className="inline-container">
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input type="tel" placeholder="Contact No." required />
          </div>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Id." required />
          </div>
          </div>
          <div className="inline-container">
          <div className="input-container">
            <FaVenusMars className="icon" />
            <input type="text" placeholder="Gender" required />
          </div>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Address" required />
        </div>
        </div>
        <div className="input-container full-width">
             <FaLock className="icon" />
            <input type="password" placeholder="Set Password" required />
        </div>

        <div className="input-container full-width">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" required />
        </div>
          <button type="submit">Create Account</button>
        </form>
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

export default SigninPage;
