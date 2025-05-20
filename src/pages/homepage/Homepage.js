import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './homepage.css'; // Import CSS file
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


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


      <div className="ngo-list-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination,Autoplay]}
        >
          <SwiperSlide><div className="ngo-box">NGO 1</div></SwiperSlide>
          <SwiperSlide><div className="ngo-box">NGO 2</div></SwiperSlide>
          <SwiperSlide><div className="ngo-box">NGO 3</div></SwiperSlide>
          <SwiperSlide><div className="ngo-box">NGO 4</div></SwiperSlide>
          <SwiperSlide><div className="ngo-box">NGO 5</div></SwiperSlide>
        </Swiper>
      </div>

      </section>
    </div>
  );
};

export default HomePage;
