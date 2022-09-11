// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_EaMxuoOpaii8lA7uf_JrlSksI1t2H8",
  authDomain: "ema-john-email-password-auth.firebaseapp.com",
  projectId: "ema-john-email-password-auth",
  storageBucket: "ema-john-email-password-auth.appspot.com",
  messagingSenderId: "681521773114",
  appId: "1:681521773114:web:fe9eb8ed5c20dd2f859303",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
