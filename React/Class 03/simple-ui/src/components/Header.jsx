import React from 'react'
import "./header.css"
import logo from '../assets/logo.png'

function Header() {
  return (
    <>

      <div className='navbar'>
      <div className='logo'>
        <img src={logo} width="40px" />
      </div>
      <div className='menu'>
        <ul>
          <li>Home</li>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Cakes to go</li>
          <li>Cafe Menu</li>
          <li>Our Stores</li>
          <li>About Us</li>
        </ul>
      </div>

      </div>   
    
    
    </>
  )
}

export default Header