// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,    
  authDomain: "carmart-b36d4.firebaseapp.com",
  projectId: "carmart-b36d4",
  storageBucket: "carmart-b36d4.appspot.com",
  messagingSenderId: "1009122265170",
  appId: "1:1009122265170:web:0d4b29f954604334e2f78b",
  measurementId: "G-9ZSM7RJKXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);