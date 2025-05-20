import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './homepage.css'; // Import CSS file

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className="home-container">
        <h1>Give. Help. Impact</h1>

<div class="info-box">
    <p>A Non-Governmental Organization (NGO) is a non-profit entity that operates independently of the government to address social, environmental, and humanitarian issues. These organizations work towards causes such as education, healthcare, poverty alleviation, and environmental conservation.</p>

    <p>Our website serves as a dedicated platform that connects people with NGOs, making it easier to support meaningful causes. Visitors can explore upcoming events, stay informed about ongoing activities, and find opportunities to contribute through volunteering. Whether you want to lend a helping hand, stay updated on social initiatives, or make a difference through donations, our website is the perfect bridge between passionate individuals and organizations striving for change.</p>
</div>

        <button className="get-started-btn">Get Started</button>
     

     <div className="ngo-list">
        <div className="ngo-box">NGO 1</div>
        <div className="ngo-box">NGO 2</div>
        <div className="ngo-box">NGO 3</div>
        <div className="ngo-box">NGO 4</div>
        <div className="ngo-box">NGO 5</div>
      </div>
      </section>
    </div>
  );
};

export default HomePage;
