import React from 'react';
import { FaUser, FaEnvelope, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './volunteer.css';

const VolunteerPage = () => {
  return (
    <div className="login-wrapper">
      <form className="login-card">
        <h1 className="login-title">Volunteer Form</h1>

        <div className="flex-input-group">
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-container">
            <FaHandsHelping className="icon" />
            <input type="text" placeholder="Area of Interest" required />
          </div>
        </div>

        <button className="login-button" type="submit">Submit</button>
        <div className="login-subtext">
          <p>Want to login instead?</p>
          <Link to="/login" className="create-account">Go to Login</Link>
        </div>

      </form>
    </div>
  );
};

export default VolunteerPage;