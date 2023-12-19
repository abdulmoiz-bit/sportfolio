import React from 'react'
import "./Exploreassets.css"
import laker from "../../assets/images/laker.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"
import logo6 from "../../assets/images/logo6.png"
import logo7 from "../../assets/images/logo7.png"
import logo8 from "../../assets/images/logo8.png"
import logo9 from "../../assets/images/logo9.png"
import logo10 from "../../assets/images/logo10.png"
import logo11 from "../../assets/images/logo11.png"
import Slider from "react-slick"




const Exploreassets = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
  };
  return (
    <div className='explore-assets'>
      <div className='explore-flex'>
        <h1>EXPLORE ASSETS</h1>
        <h2>NBA | NFL | NHL</h2>
      </div>
      <div className='heading-la'>
        <h1><span style={{ color: "purple" }}>LOS ANGELES</span> <span style={{ color: "orange", paddingLeft: "1rem" }}>LAKERS</span></h1>
        <h2>EST. 1947 &nbsp; CRYPTO ARENA</h2>
      </div>
      <div className='data-flex'>
        <div className='team-value'>
          <h2>TEAM VALUE</h2>
          <p>as of Oct 2022</p>
          <h1 style={{ paddingTop: "1rem" }}>$5.9B</h1>
          <img style={{ paddingTop: "1rem" }} src={laker} />
        </div>
        <div className='valuation'>
          <h2>VALUATION <br/> BREAKDOWN</h2>
          <div className="valuation-span" style={{ padding: "2rem 0rem", lineHeight: "3rem" }}>
            <ul>
              <li>Stadium</li>
              <li>Brand</li>
              <li>Sport</li>
              <li>Market</li>
            </ul>
            <ul style={{ paddingLeft: "2rem", fontWeight: "bold" }}>
              <li>$758M</li>
              <li>$897M</li>
              <li>$1,373M</li>
              <li>$2,872M</li>
            </ul>
          </div>
        </div>
        <div className='initial-public'>
          <h2>INITIAL PUBLIC <br />OFFERING DETAILS</h2>
          <div className="initial-public-span" style={{ padding: "2rem 0rem", lineHeight: "3rem" }}>
            <ul>
              <li>Market Capitalization</li>
              <li>Tokens available for sale</li>
              <li>Avg. Price per token</li>
              <li>IPO Date</li>
            </ul>
            <ul style={{ paddingLeft: "2rem", fontWeight: "bold" }}>
              <li>$60M</li>
              <li>1000</li>
              <li>$77.12</li>
              <li>TBA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Exploreassets