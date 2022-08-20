import { async } from '@firebase/util'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React , {useState} from 'react'
import { auth, db } from '../firebase'


const style = {
     form:  ` h-14 w-full max-w-[728px] flex text-xl  absolute bottom-0 `,
     input : `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
     button : ` w-[20%] bg-green-500 text-white`
}



const SendMessage = ({scroll}) => {

 const [input, setInput] = useState("")

    const SendMessage = async (e) => {
        e.preventDefault()
     if (input === "") {
        alert("Lütfen mesaj yazın")
     }

        const {uid , displayName} = auth.currentUser 
        await addDoc(collection(db , "messages"), {
            text : input,
            name : displayName,
            uid,
            timestamp : serverTimestamp()
        })
        setInput("")
        scroll.current.scrollIntoView({behavior : "smooth"})
    }



  return (
    <form   onSubmit={SendMessage} className={style.form}>
        <input className={style.input}
         value={input}
         placeholder="message"
         onChange={(e) => setInput(e.target.value)}
         className={style.input}
         type="text"
        />
        <button type='submit' className={style.button}>Send</button>
    </form>
  )
}

export default SendMessage