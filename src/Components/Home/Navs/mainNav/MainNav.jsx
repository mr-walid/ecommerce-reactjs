import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import {FaHeart} from 'react-icons/fa'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Product from '../../../pages/Product/Product'
import Home from '../../Home'
import About from '../../../pages/About/About'
import Contact from '../../../pages/contact/Contact'
import Signin from '../../../signin/Signin'
import Signup from '../../../signup/Signup'
import {Link} from "react-router-dom"

import './MainNav.css'

function MainNav() {
 
   const [active, setActive] = useState() 
   const [sideBare, setSideBare] = useState() 

                                                                        
  return (
    <nav className='mainNav-container'>
      <div className="logo">
      <h1>Walid</h1>
      </div>
      <div className="list">
      <ul className={sideBare && 'side'}>
      <Link to='/'>
      <li className= {active === 'Home' ? 'active' : ''} onClick={()=>setActive('Home')} >Home</li>
      </Link>
      <Link  to='/Product'>
      <li className= {active === 'Product' ? 'active' : ''} onClick={()=>setActive('Product')}>Product</li>
      </Link>
      <Link  to='/About'>
      <li className= {active === 'About' ? 'active' : ''} onClick={()=>setActive('About')}>About</li>
      </Link>
      <Link  to='/Contact'>
      <li className= {active === 'Contact' ? 'active' : ''} onClick={()=>setActive('Contact')}>Contact Us</li>
      </Link>
                                                   
        </ul>
      </div>
      <div className="like-add">
            <Link to='/Signin'> login/signup </Link>
            <FaHeart className='like' />
            <h3>0</h3>
            <MdOutlineAddShoppingCart className='add' />
            <h2>0</h2>
      </div>
       <GiHamburgerMenu onClick={()=>setSideBare(!sideBare)} className='burger'/>
    </nav>
  )
}

export default MainNav
