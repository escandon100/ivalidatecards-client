import React from "react";
import "./testimonials.scss";


const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="top">
            <div className="clients">
                <h1>15k+</h1>
                <span>Satisfied Clients</span>
            </div>
            <div className="transactions">
                <h1>120k+</h1>
                <span>Total Transactions</span>
            </div>
            <div className="users">
                <h1>545K+</h1>
                <span>Active Users</span>
            </div>
            <div className="reviews">
                <h1>20,000+</h1>
                <span>Positive reviews</span>
            </div>

        </div>
        <div className="bottom">
            <div className="header">
             <h1>What Client Say about our services</h1>
            </div>
            <div className="reviews">
                <div className="review">
                    <div className="reviewText">
                        <p> Quick and easy , best for gift cards to your friends.
                            No hassle or worries, card is delivered to your email and 
                            you forward it to your friends.A great platform to gift someone
                            close to you.
                          </p>
                       
                    </div>
                    <div className="user">
                        <div className="userImg"> 
                            <img src="/testimonial1.jpeg" alt="" />
                        </div>
                        <div className="userName">
                            <h3>Jane Adams</h3>
                            <span>Client</span>
                        </div>
                        

                    </div>

                </div>
                <div className="review">
                    <div className="reviewText">
                        <p>I stumbled on your site looking for fast delivery of gift cards.
                             The site was quick and easy to use, and I would recommend it. 
                             This is a great option for buying digital giftcards
                             if you are not living in USA.</p>
                    </div>
                    <div className="user">
                        <div className="userImg"> 
                            <img src="/testimonial2.jpg" alt="" />
                        </div>
                        <div className="userName">
                            <h3>Vincent Mark</h3>
                            <span>Client</span>
                        </div>

                    </div>

                </div>
                <div className="review">
                    <div className="reviewText">
                        <p>I hardly have problems when I purchase gift cards,
                         if I do have issues they resolve them very quickly! Good professional friendly service,
                         especially the fact that it is easy and fast. </p>
                    </div>
                    <div className="user">
                        <div className="userImg"> 
                            <img src="/testimonial3.jpg" alt="" />
                        </div>
                        <div className="userName">
                            <h3>Amanda Smith</h3>
                            <span>Client</span>
                        </div>
                    </div>

                </div>
               

            </div>
          

        </div>
      
    </div>
  )
}

export default Testimonials
