import React from 'react'
import players from "../../assets/images/players.png"
import "./Players.css"

const Players = () => {
    return (
        <div className='players'>
            <h1>EXPLORE ASSETS</h1>
            <p>
                Buy Ownership In Your Favorite Sports Team Via <br /> Their Current Roster.
            </p>
            <div className='players-image'>
            <img src={players} alt="playersimage" />
            </div>
        </div>
    )
}

export default Players