import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './homepage.css';

const HomePage = () => {
  const ngos = [
    { name: 'HungerHope', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiUn7zarjh91rmn-bbEDmb3FD2BhU4Ab_-w&s' },
    { name: 'ElderNest', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVqMISB0NdZkjRWqLrPJph5BP74O2lg10D7l9bKAXNzFcIl9MVxXXF3UfGKPiGOrNtRg&usqp=CAU' },
    { name: 'SheRise', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoszObMs9cof_vqH-xMtlyXWQUVxQ01zgaTw&s' },
    { name: 'PawSafe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SJzfyz7l9DuVF_h1YHQ1EVhO5lgkHaZrEA&s' },
    { name: 'BrightSteps', image: 'https://www.sharanalayam.org/wp-content/uploads/2024/01/banner1.jpg' }
  ];
  

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

        {}
        <div className="scroll-container">
  <div className="scroll-content">
    {ngos.concat(ngos).map((ngo, index) => (
      <div className="ngo-box" key={index}>
        <img src={ngo.image} alt={ngo.name} className="ngo-image" />
        <p>{ngo.name}</p>
      </div>
    ))}
  </div>
  
</div>


      </section>
    </div>
  );
};

export default HomePage;
