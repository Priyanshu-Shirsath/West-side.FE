// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Corrected the import path

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDin_PpOszz9C1ujzZFZSr3DBHT8yh1jkg",
  authDomain: "west-side-879c6.firebaseapp.com",
  projectId: "west-side-879c6",
  storageBucket: "west-side-879c6.appspot.com",
  messagingSenderId: "188077519340",
  appId: "1:188077519340:web:e0b701ffbbfd397bf290c9",
  measurementId: "G-R9VYHV8MJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set up Google provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()