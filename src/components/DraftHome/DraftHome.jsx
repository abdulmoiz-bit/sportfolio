import React from 'react'
import "./DraftHome.css";
import drafthome from "../../assets/images/drafthome.png"

const DraftHome = () => {
    return (
        <div className='draft-flex-container'>
            <div className='draft-text'>
                <h1>THE DRAFT</h1>
                <p>After regulatory qualifications, a newly tokenized <br />sports team heads to the market for the first time via <br />an Initial Public Offering, the draft.
                </p>
                <p>
                    Each draft is your chance to buy equity in an athlete,<br /> which represents ownership in a sports team. .</p>
                <p>Currently, we’re in BETA and actively working towards <br />NBA, NFL and NHL partnerships.</p>
            </div>

            <div className='draft-image'>
                <img src={drafthome} alt="graph" />
            </div>
        </div>
    )
}

export default DraftHome;