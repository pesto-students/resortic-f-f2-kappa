// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-Nb5w75H4vlQUlUDyqhifyg4mgeAIhY",
  authDomain: "resort-booking-4e104.firebaseapp.com",
  projectId: "resort-booking-4e104",
  storageBucket: "resort-booking-4e104.appspot.com",
  messagingSenderId: "545590056544",
  appId: "1:545590056544:web:d28d32823e7f858eacd505",
  measurementId: "G-RDXPSHYM5F",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
