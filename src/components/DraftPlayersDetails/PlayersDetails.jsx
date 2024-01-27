import React from "react";
import "./PlayersDetails.css";
//import african from "../../assets/images/african.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
//import dollarlogo from "../../assets/images/dollarlogo.png"
//import value from "../../assets/images/value.png"



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

        <div><img src={one} alt="" /></div>

        <div><img src={two} alt="" /></div>

        <div><img src={three} alt="" /></div>

        <div><img src={four} alt="" /></div>

        <div><img src={five} alt="" /></div>

      </div>


    </div>
  );
};

export default PlayersDetails;
