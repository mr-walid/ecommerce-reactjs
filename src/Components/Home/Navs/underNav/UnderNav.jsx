
import {Link} from 'react-router-dom'
import React from 'react'
import './UnderNav.css'

function UnderNav() {
  return (
    <nav className='underNav'>
      <div className="logo">New Products</div>
      <div className="links">
        <ul>
            <Link to='/Women'><li>Women</li></Link>
            <Link to='/Men'><li>Men</li></Link>
            <Link to='/Children'><li>Children</li></Link>
            <Link to='/Accessoire'><li>Accessoire</li></Link>
            <Link  to='/Cosmetics' ><li>Cosmetics</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default UnderNav
