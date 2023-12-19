import React from "react";
import "./PlayersDetails.css";
import african from "../../assets/images/african.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import dollarlogo from "../../assets/images/dollarlogo.png"
import value from "../../assets/images/value.png"
//import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const PlayersDetails = () => {
  
  return (
    <div className="players-details">
      <h1>
        START YOUR <br /> SPORTFOLIO TODAY
      </h1>
      <div className="players-slider">
        <h2>Current Active Roaster 2022-23</h2>
      </div>

      <div className="players-img">
        <Swiper
           modules={[Navigation, A11y]}
           spaceBetween={40}
           slidesPerView={4}
           navigation
           pagination={{ clickable: true }}
        >
          <SwiperSlide> <img src={one} /></SwiperSlide>
          <SwiperSlide> <img src={two} /></SwiperSlide>
          <SwiperSlide> <img src={three} /></SwiperSlide>
          <SwiperSlide> <img src={four} /></SwiperSlide>
          <SwiperSlide> <img src={five} /></SwiperSlide>
          <SwiperSlide> <img src={one} /></SwiperSlide>
          <SwiperSlide> <img src={two} /></SwiperSlide>
          <SwiperSlide> <img src={three} /></SwiperSlide>
          <SwiperSlide> <img src={four} /></SwiperSlide>
          <SwiperSlide> <img src={five} /></SwiperSlide>
        </Swiper>
      </div>


      <h2>DEMO Order Details</h2>

      <div className="demo-orderdetails">

        <div className="demo-orderdetails-image">
          <img src={african} alt="" />
          <div className="demo-orderdetails-values">
            <ul>
              <li>Ticker:</li>
              <li>Position:</li>
              <li>Player:</li>
            </ul>
            <ul style={{ marginLeft: "3rem" }}>
              <li>LBJ06</li>
              <li>Point Guard</li>
              <li>LeBron James</li>
            </ul>
          </div>
        </div>

        <div className="second-column">
          <div className="second-column-buttons">
            <button style={{ backgroundColor: "black", color: "white" }}>Buy</button>
            <button>Sell</button>
            <button>Swap</button>
          </div>
          <div className="second-column-dropdown">
            <select name="cars" id="cars">
              <option value="volvo">One-time order</option>
            </select>
          </div>
          <div className="second-column-dvalue">
            <h1 style={{ fontSize: "5rem" }}> 0 <span style={{ color: "blue", fontWeight: "100" }}>|</span> <span style={{ color: "rgba(0, 0, 0, 0.2)" }}>USD</span> </h1>
            <div className="second-column-dollar">
              <img src={dollarlogo} />
              <p style={{ color: "blue", fontSize: "14px" }}>0.00 Token Value in USD Coin</p>
            </div>
          </div>
          <div className="second-column-values">
            <span style={{ fontSize: "3rem" }}>$80.74</span>
            <img src={value} />
          </div>
          <p>Current Market Price</p>
        </div>


        <div className="third-column">
          <div className="third-column-lakers">
            <p>Your LAKERS Ownership %</p>
          </div>
          <div className="third-column-zeros">
            <h1 style={{ fontSize: "3rem" }}>37% <span style={{ color: "blue", fontWeight: "100" }}>|</span><span style={{ fontWeight: "100" }}>$0,00.00</span></h1>
          </div>
          <div className="third-column-values">
            <span style={{ fontSize: "3rem" }}>$80.74</span>
            <img src={value} />
          </div>
          <p>Current Market Price</p>
        </div>

      </div>
    </div>

  );
};

export default PlayersDetails;
