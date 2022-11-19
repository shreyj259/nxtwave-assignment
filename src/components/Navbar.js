import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'

const Navbar = () => {
  return (
    <div className='flex-container navbar'>

        <div className="logo-container">
            <img src="./src/logo.svg" alt="" />
        </div>

        <div className="avatar-container flex-container">
            <Link >ADD ITEM</Link>
            <img src="./src/avatar.png" alt="" />
        </div>
        
    </div>
  )
}

export default Navbar