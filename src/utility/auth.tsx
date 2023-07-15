// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmllFusMh6M2KUFUEVE8joQPst25uZEQ",
  authDomain: "novel-heaven-5e62d.firebaseapp.com",
  projectId: "novel-heaven-5e62d",
  storageBucket: "novel-heaven-5e62d.appspot.com",
  messagingSenderId: "392768120243",
  appId: "1:392768120243:web:8d07defeda884fc30657c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
