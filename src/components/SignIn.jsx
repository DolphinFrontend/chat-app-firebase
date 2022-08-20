import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from "../firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import LogOut from './LogOut'



 const style = {
    wrapper : `flex justify-center`
 }

const googleSingIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}



const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton  onClick={googleSingIn}/>
       
    </div>
  )
}

export default SignIn