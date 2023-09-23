import React from 'react'
import "./Footer.css"
import footerlogo from "../../assets/images/footerlogo.png"
import footerimage from "../../assets/images/footerimage.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footerlogo} alt=""/>
        <p>Placeholder for all the compliance, <br />
          privacy policy and terms of service.</p>
      </div>
      <div className='footer-image'>
        <h2>Stay turned for <br /> new ASSETS via <br /> our DRAFT PORTAL</h2>
        <img src={footerimage} alt="" />
      </div>
      <div className='footer-questions'>
        <h3>When do new drafts <br /> happen?</h3>
        <p>During our Beta, the draft period will <br /> vary, so please Register to get the <br /> latest announcements.</p>
        <h3 style={{paddingTop: "4rem"}}>What if I missed a draft?</h3>
        <p>You can still purchase assets from <br />our Exchange from other investors.</p>
      </div>
    </div>
  )
}

export default Footer