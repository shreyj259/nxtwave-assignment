import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/navbar.css'

const Navbar = () => {
  const {pathname}=useLocation();
  const [mobilebtn,setMobilebtn]=useState(false);

  const handleMobileClick=()=>{
    setMobilebtn(prev=>!prev)
  }
  return (
    <div className='flex-container navbar'>

        <div className="logo-container">
            <img src="./src/logo.svg" alt="" />
        </div>

        <div className={`${mobilebtn?"mobile-avatar-container":"avatar-container"} flex-container`}>
            {pathname!=="/additem"?<Link to="/additem" >ADD ITEM</Link>:null}
            <img src="./src/avatar.png" alt="" />
            
        </div>
        <img src="./src/arrow.png" onClick={handleMobileClick} alt="" className='mobile-btn'/> 
    </div>
  )
}

export default Navbar