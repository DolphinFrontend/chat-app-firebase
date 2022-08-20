// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmzO4pGQKz09qZ7Qmy3BpihPmoKZkOL9Q",
  authDomain: "chat-app-b5566.firebaseapp.com",
  projectId: "chat-app-b5566",
  storageBucket: "chat-app-b5566.appspot.com",
  messagingSenderId: "1050218034715",
  appId: "1:1050218034715:web:cdcc99dd27ecf9a7746abe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)