import React from 'react';
import {HashLink as Link} from "react-router-hash-link"
import "./copyrights.scss";

const Copyrights = () => {
  return (
    <div className='copyrights'>
      <div className="top">
       <div className="topImage"><img src="/background-giftcard.png" alt="" /></div> 
        <div className="topText">
          <div className="wrapper">
          <h1>Validate Cards now?</h1>
          <p>Purchase digital cards with instant email delivery. 
            we email all kinds of cards internationally.
             we accept paypal and credit cards mode of payments. 
            we are available 24/7.</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomBrand">
          <div className="wrapper">
            <img src="/logo.png" alt="" />
            <p>Purchase digital cards with instant email delivery.
              we email all kinds of cards internationally.
                we accept paypal and credit cards mode of paymetns.
              we are available 24/7.</p>
          </div>
          
        </div>
        <div className='actions'>
          <h1>Actions</h1>
          <Link to="/#home">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#buy">Buy/Validate Cards</Link>
          <Link to="/#faq">Contact Us</Link>
          <Link to="/policy">Privacy Policy</Link>


        </div>

      </div>
      <div className="copyrightOnly"><div>CopyRights © 2025</div>
      </div>
      
    </div>
  )
}

export default Copyrights
