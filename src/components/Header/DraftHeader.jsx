import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';
import logoimage from "../../assets/images/logoimage.png"

const DraftHeader = () => {
    return (
            <div className="home-navbar" style={{backgroundColor: "rgb(4, 131, 6)"}}>
                <div className="home-logo" style={{ marginTop: "1rem" }}>
                    <img src={logoimage} />
                    <h2>Sportfolio</h2>
                </div>
                <div className="home-menu-list">
                    <ul style={{ marginTop: "1rem" }}>
                        <li>
                            <a><NavLink to="/">Home</NavLink></a>
                        </li>
                        <li>
                            <a><NavLink to="/draft">Draft</NavLink></a>
                        </li>
                    </ul>
                    <button style={{ marginTop: "1rem" }}>Sign Up</button>
                </div>

            </div>
    );
}

export default DraftHeader;