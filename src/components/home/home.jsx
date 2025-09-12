import React from 'react'
import "./home.scss"
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
     <div id="home" className='home'> 
      <div className="left">
        <div className="intro">
        <h1>Purchase and Validate digital gift cards</h1>
        <div className="introDetails">
          <p>Your No.1 stop for any gift card purchase and validation- swift response, 
          Top-notch security and trusted by over 5,000 users daily.</p>
        </div>
       
        </div>
        <div className="introButtons">
          <Link to="#buy" className="button"><img src="/shopping-bag-icon2.png" alt="" /><span>Buy Cards</span></Link>
          <Link to="#buy" className="button"><img src="/right-arrow2.png" alt="" /><span>Validate Cards</span></Link>
        </div>
        <div className="introNumbers">
          <div className="validations">
            <h1>30k+</h1>
            <p>Daily Validations</p>
          </div>
          <div className="purchases">
            <h1>15k+</h1>
            <p>Digital Cards Purchased</p>
          </div>

        </div>
        
      </div>
      <div className="right">
        <img src="/background-giftcard.png" alt="" />

      </div>        
   </div>  

  )
}

export default Home
