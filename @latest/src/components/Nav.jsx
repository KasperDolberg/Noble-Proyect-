import React from 'react'
import './stylesheet/Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <a href="/Home" className='site-title'>NOBLE</a>
        </div>
      <ul>
        <li className='navegation'>
          <a href="/Contact">Contact</a>
        </li>
        <li className='navegation'>
        <a href="/About">About</a>
        </li>
        <li className='navegation'>
        <a href="/Gallery">Our Gallery</a>
        </li>
      </ul>

    </nav>
  )
}

export default Nav 