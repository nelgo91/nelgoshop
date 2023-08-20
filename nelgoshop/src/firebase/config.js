// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_DbcbwzOk4TAWqdJjBGyH3vnZPOYuCtg",
  authDomain: "nelgoshop-cd6bc.firebaseapp.com",
  projectId: "nelgoshop-cd6bc",
  storageBucket: "nelgoshop-cd6bc.appspot.com",
  messagingSenderId: "867696039372",
  appId: "1:867696039372:web:87330d0f228c492533f969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);