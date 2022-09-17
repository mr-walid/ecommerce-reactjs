
import TopNav from '../../Home/Navs/topNav/TopNav'
import MainNav from '../../Home/Navs/mainNav/MainNav'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../../FireBaseConnection'
import { getAuth } from "firebase/auth";

import React from 'react'

function Product() {
   

  return (
    <div>
     <TopNav/>
     <MainNav/>
     <h2>hello </h2>
      <h1>Product</h1>
    </div>
  )
}

export default Product
