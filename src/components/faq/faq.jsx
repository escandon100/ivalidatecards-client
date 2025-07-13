import React from 'react';
import Accordions from '../accordions/accordions';

import "./faq.scss";

const Faq = () => {
  return (
    <div className='faq'>
      <div className="contact">
        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
           <button><img src='/mail.png' alt=''></img>Contact Us</button>
        </div>
      </div>
      <div className='accordion'>
        <Accordions/>
      </div>
  

    </div>
  )
}

export default Faq
