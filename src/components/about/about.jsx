import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import "./about.scss";

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="left">
        <div className="wrapper">
          <div className="leftText">
            <h1>About us</h1>
            <p>We offer a wide selection of gift cards from popular brands across various categories, 
              including fashion, dining, entertainment and more.</p>
            <button><img src="/right-arrow2.png" alt="" /><Link to="#buy">Validate Giftcards</Link></button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className='rightImage'><img src="/customer-care.png" alt="" /></div> 
      </div>
      
      
    </div>
  )
}

export default About
