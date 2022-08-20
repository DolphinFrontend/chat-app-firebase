
import React from 'react'
import {auth} from "../firebase"

const style = {
   button : `bg-gray-200 m-2  h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full   px-4 hover:bg-gray-100`
}


const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
    
      return (
        <button onClick={() => auth.signOut()} className={style.button}>
            Logout
        </button>
      )
    }

export default LogOut