import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdPlace} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {GrYoutube} from 'react-icons/gr'
import './TopNav.css'

import React from 'react'

function TopNav() {
  return (
    <div className = 'topNav-container'>
        <div className = "contact">
        <BsFillTelephoneForwardFill className='con'/><h1>+212634198690</h1>
           <MdPlace className='con'/><h1>Hey Essalam El jadida R N 12 </h1>
       </div> 
       <div className="social-icons">
          <GrInstagram className='soc'/>
          <FaFacebook className='soc'/>
          <BsFillTelephoneForwardFill className='soc'/>
          <GrInstagram className='soc'/>
       </div>
    </div>
  )
}

export default TopNav
