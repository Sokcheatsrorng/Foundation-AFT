// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATJf6HsbRJtg7J9pou4UQwk5FcG2V0S90",
  authDomain: "react-firebase-8cea2.firebaseapp.com",
  projectId: "react-firebase-8cea2",
  storageBucket: "react-firebase-8cea2.firebasestorage.app",
  messagingSenderId: "1003030034512",
  appId: "1:1003030034512:web:ecbdaf48971adf1957f955",
  measurementId: "G-7YR2WCYFHQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export {auth};
