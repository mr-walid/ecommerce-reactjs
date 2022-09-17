import {Link, link} from 'react-router-dom'
import {useState , useRef} from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdDriveFileRenameOutline} from 'react-icons/md'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../../FireBaseConnection"

import './Signup.css'


function Signup() { 

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
    
    const signingUp = (e) => {
      e.preventDefault();
        const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...*
      console.log(user)
      alert('successfully created user ')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode)
    });
    

    }
 

  return (
    <div className='signup'>
      <div className="form">
      <h2>Login</h2>
      <p>Please fill in this form to create an account</p>
           <div className='lineh'></div>
        <form className="formup">
                <input  type={"email"} placeholder='Email...'  onChange={(event)=>setEmail(event.target.value)}/>
                <input  type={"password"} placeholder='Password...'  onChange={(event)=>setPassword(event.target.value)} />
                <input type={"password"} placeholder='Confirm Password...' />
                
                <button onClick={signingUp}  className="submit" type='submit'>Sign up</button>

                <p>already have an account? <Link  className='go' to='/Signin'>Log in</Link> </p>
              
                
            
            
        
        
        </form>
      </div>
    </div>
  )
}

export default Signup
