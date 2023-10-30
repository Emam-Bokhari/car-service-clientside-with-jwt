// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYcL05SUwlhzNH1F3PuLAzArHF1TJn4w4",
  authDomain: "auth-provider-practice.firebaseapp.com",
  projectId: "auth-provider-practice",
  storageBucket: "auth-provider-practice.appspot.com",
  messagingSenderId: "191199426869",
  appId: "1:191199426869:web:94180d574d417a4799747c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth