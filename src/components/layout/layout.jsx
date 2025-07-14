import React from 'react'
import Navbar from '../navbar/navbar';
import Home from "../../components/home/home"
import About from '../about/about';
import Buy from "../buy/buy"
import Testimonials from '../testimonials/testimonial';
import Faq from '../faq/faq';
import Copyrights from '../copyrights/copyrights';
import Livechat from "../livechat";
import "./layout.scss"


const Layout = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <Livechat/>

        <div id="home">
            <Home/>
           
        </div>
        <div id="about">
            <About/>
        </div>     
        <div id="buy">
            <Buy/>
        </div> 
        <div id="testimonials">
            <Testimonials/>
        </div> 
        <div id="faq">
            <Faq/>
        </div> 
        <Copyrights/>
    </div>
  )
}

export default Layout
