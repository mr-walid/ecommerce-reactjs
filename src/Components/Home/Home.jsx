
import TopNav from './Navs/topNav/TopNav'
import MainNav from './Navs/mainNav/MainNav'
import UnderNav from './Navs/underNav/UnderNav'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'
import img5 from '../../img/img5.jpg'
import {Link} from 'react-router-dom'

import './Home.css'


import React from 'react'

function Home() {
  return (
    <div className='home-container'>
      <TopNav />
      <MainNav />
       <div className="img-gallery">
            <div className="big-one">
            <div className="shop">
            <h2>Women’s fashion</h2>
            <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>

            <Link to='/Product' className='link'><div className='line'></div> Shop Now</Link>
            </div>
       
           <img src={img2} alt="women's fashion" />
         </div>
         <div className="pics">
         <div className="top-pics">
          <img src={img3} alt="" /> <div className="shop">
            <h2>Cosmetics</h2>
            <p>358 items.</p>

            <Link to='/Product' className='link'><div className='line'></div> Shop Now</Link>
            </div>
          <img src={img1} alt="" />
          <div className="shop-1">
            
            </div>
         </div>
          <div className="bottom-pics">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          </div>
          
         </div>
       
       </div>
      
       <UnderNav />
      
    </div>
  )
}

export default Home
