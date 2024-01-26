import React from 'react'
import './Signup.css';

const Signup = () => {
    return (
        <div className='text-content'>
            <div className='first'>
                <h1> PHYSICAL </h1>
                <p>
                    There hasn’t been a transparent, easy way to invest in sports until now. We partner with the sports teams to tokenize ownership and issue tokens in the form of shares
                    via an Initial Public Offering (IPO)
                </p>
                <p>
                    In essence, an IPO means that a sports team’s ownership is transitioning from private ownership to public
                    ownership - “going public”</p>
                <p>
                    Let’s play together as a team to make ownership accessible for all, not just the top dogs.
                </p>

                <div className='news-letter'>
                    <input type="text" placeholder='Email@gmail.com' />
                    <button style={{marginLeft: "1rem"}}> Sign Up</button>
                </div>
            </div>

            <div className='second'>
                    <h1>TOKENIZATION  OF AN ASSET</h1>
                    <p>Tokenized assets are blockchain-based tokens that represent the ownership over a particular physical and digital
                        assets. Smart contract based automation enables fractional asset ownership, peer-to-peer asset trading,
                        ownership traceability, compliance, etc.
                    </p>

                    <h1 style={{marginTop: "3rem"}}>INTRINSIC</h1>
                    <p>Each team roster is placed into our proprietary algorithm to calculate the intrinsic value of an athlete based
                        on the real game stats. After that, via our secure draft portal investors can buy shares of each athlete to
                        build their Sportfolio, a sports portfolio.
                    </p>
            </div>

        </div>
    )
}

export default Signup;