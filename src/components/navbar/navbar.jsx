import React, { useState } from "react"
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.scss"


const Navbar = () => {
    const [activatedMenu , setActivatedMenu] = useState(false)

  return (
     <div className='navbar'>
      <div className="left">
        <div className="brand">
           <img src="/logo.png" alt="" />
           <span>IVALIDATE</span>
         </div>
       </div>

     <div className="right">
       <div className="links">
       <Link to="#">Home</Link>
          <Link to="#about">About us</Link>
          <Link to="#buy">Buy/Validate</Link>
          <Link to="#testimonials">Reviews</Link>
          <Link to="#faq">Contact us</Link>
      </div>
      
      <div className="menuIcon" >
        <img src="/menu.png" onClick={()=>{setActivatedMenu(true)}} alt="" />     
      </div>

      <div className={`cancelIcon ${activatedMenu && "activate" }`} onClick={()=>{setActivatedMenu(false)}} >
          <img src="/cancel.png" alt="" />         
      </div>
     </div>
   {activatedMenu &&  <div className="menu " >
          <Link to="#home">Home</Link>
          <Link to="#about">About us</Link>
          <Link to="#buy">Buy/Validate</Link>
          <Link to="#faq">Contact us</Link>
     </div>  }
   </div>

      
  )
}

export default Navbar


