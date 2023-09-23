import React from 'react'
import './HomeHome.css';
import V1 from "../../assets/V1.apng"

const HomeHome = () => {
    return (
        <div className='home-flex-container'>
            <div className='home-text'>
                <h1>OWNERSHIP <br /> made simple</h1>
                <p>The first dynamic exchange to buy ownership in your favorite sports team, just like stocks. </p>
                <p>Start building your Sportfolio. Secure Sales. Low Fees.</p>
                <button className='waitlist-btn'>WAITLIST</button> <br></br>
                <button className='learnmore-btn' style={{backgroundColor: "blue", color: "white"}}>LEARN MORE</button>
            </div>

            <div className='home-image'>
               <img src={V1}></img>
            </div>
        </div>
    )
}

export default HomeHome