// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDncCF0j1XIzXXTri8pR74XzXiX2D3kPJs",
  authDomain: "covidvaccination-d5e13.firebaseapp.com",
  projectId: "covidvaccination-d5e13",
  storageBucket: "covidvaccination-d5e13.appspot.com",
  messagingSenderId: "718158729115",
  appId: "1:718158729115:web:a3c44512c6a26dc29c9b3e",
  measurementId: "G-J4LEEFHVTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getFirestore(app)

export {auth , database}