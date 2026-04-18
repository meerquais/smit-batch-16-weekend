import { useState } from 'react'
import './Header.css'


function Header() {


 


  return (
    <>
    <div className='nav'>
    <div>
        <a>Logo</a>

    </div>
    <div className='list'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <input type="search" name="" id="" />
      <button>Search!</button>
    </div>

    </div>
    </>
  )
}

export default Header
