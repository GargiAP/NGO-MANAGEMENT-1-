import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './homepage.css';

const HomePage = () => {
  const ngos = ['NGO 1', 'NGO 2', 'NGO 3', 'NGO 4', 'NGO 5'];

  return (
    <div>
      <Navbar />

      <section className="home-container">
        <h1>Give. Help. Impact</h1>

        <div className="info-box">
          <p>
            A Non-Governmental Organization (NGO) is a non-profit entity that operates independently of the government to address social, environmental, and humanitarian issues. These organizations work towards causes such as education, healthcare, poverty alleviation, and environmental conservation.
          </p>
          <p>
            Our website serves as a dedicated platform that connects people with NGOs, making it easier to support meaningful causes. Visitors can explore upcoming events, stay informed about ongoing activities, and find opportunities to contribute through volunteering. Whether you want to lend a helping hand, stay updated on social initiatives, or make a difference through donations, our website is the perfect bridge between passionate individuals and organizations striving for change.
          </p>
        </div>

        <button className="get-started-btn">Get Started</button>

        {/* 🔄 Updated NGO Scrolling Section */}
        <div className="scroll-container">
          <div className="scroll-content">
            {ngos.concat(ngos).map((ngo, index) => (
              <div className="ngo-box" key={index}>
                {ngo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
