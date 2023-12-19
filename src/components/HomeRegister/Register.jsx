import React from 'react'
import './Register.css'
import register from "../../assets/images/register.png"
import draft from "../../assets/images/draft.png"
import exchange from "../../assets/images/exchange.png"

const Register = () => {
    return (
        <div className='second-content'>
            <div className='how'>
                <h1>HOW IT WORKS</h1>
            </div>
            <div className='wrap-content'>
                <div>
                    <div className='register'>
                        <img src={register} alt="" />
                        <h2>REGISTER</h2>
                        <p>Register to create an account <br />
                            and meet the eligibility requirements.</p>
                    </div>
                    <div className='draft'>
                        <img src={draft} alt="" />
                        <h2>DRAFT</h2>
                        <p>After regulatory qualifications, We open an <br />
                            “Initial Public Offering” where you can <br />
                            purchase ownership. </p>
                    </div>
                    <div className='exchange'>
                        <img src={exchange} alt="" />
                        <h2>EXCHANGE</h2>
                        <p>A dynamic marketplace to buy and sell your holdings. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;