import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import VolunteerPage from "./pages/volunteerpg/Volunteerpg"; 
import LoginPage from "./pages/loginpage/Loginpage";
import SigninPage from "./pages/signinpage/Signinpage";
import VolunteerForm from "./pages/volunteerpg/volunteerform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} /> 
        <Route path="/volunteer1" element={<VolunteerForm />} /> 

        <Route path="/login" element={<LoginPage />} />
        <Route path="/popupsignin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
