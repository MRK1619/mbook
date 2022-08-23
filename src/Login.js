import React from 'react'
import './Login.css'
import logo from './images/logo.png'
import logo2 from './images/logo2.png'
import { Button } from '@mui/material'
import {auth, provider } from './firebase-config'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {
  const[state,dispatch]=useStateValue();

  const signin=()=>{
    auth
    .signInWithPopup(provider)
    .then(result=>{
      dispatch({
        type:actionTypes.SET_USER,
        user:result.user
      })
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
        <div className="login_logo">
            <img src={logo} alt='' />
            <img className='img2' src={logo2} alt='' />
        </div>
         <Button className="button" onClick={signin}>Sign In</Button>
    </div>
  )
}

export default Login