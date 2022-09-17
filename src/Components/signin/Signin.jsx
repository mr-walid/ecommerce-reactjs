
import {Link, Navigate} from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../FireBaseConnection"
import Admin from './admin/Admin';
import './Signin.css'


import React from 'react'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

   const signIn = (e) =>{

    e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(user.email === 'walid@gmail.com'){
           console.log(user)
          alert('you have successfully logged in')
          navigate('/Admin')
 
          } 
          else {
            navigate('/')
          }
          // ...
          

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode)
        });
        


   }

 
  return (
    <div className="sign">
      <div className="style-top"></div>
      <div className="form">
        
        <form className="form-sign">
        <h2>Login</h2>
            <input   type="email" placeholder='Enter Your Email...' onChange={(event)=>setEmail(event.target.value)} />
            <input      type="password"  placeholder='Password...'  onChange={(event)=>setPassword(event.target.value)}/>

            <button onClick={signIn} className="login" type='submit'> Login </button> 

            <p className="dont">Dont have an account? <Link to='/Signup'>Create one Now</Link></p>
            <div className="line"></div>
            <div className="line-1"></div>
            <p className="or">Or login with </p>
            <button    className="sign-google"> 
              <FcGoogle className="sign-icon"/>
              Sign in with Google
             </button>
        
        </form>
      </div>
      <div className="style-bottom"> </div>
    </div>
  )
}

export default Signin

