// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiYQH-l7DuMVScdV4h2xQ_HX6bdlAefyM",
  authDomain: "portfolio-63851.firebaseapp.com",
  projectId: "portfolio-63851",
  storageBucket: "portfolio-63851.appspot.com",
  messagingSenderId: "931248620219",
  appId: "1:931248620219:web:d10a46f9092db0aef05f9e",
  measurementId: "G-T6VEBRY45F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);