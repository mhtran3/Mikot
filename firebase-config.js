// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58izmT6b-GlN0pQe3KwHZ0KfOwiPZW5g",
  authDomain: "portfolio-290ec.firebaseapp.com",
  projectId: "portfolio-290ec",
  storageBucket: "portfolio-290ec.appspot.com",
  messagingSenderId: "163976893661",
  appId: "1:163976893661:web:be0e436fee4745be99f734",
  measurementId: "G-3SKYGEVRQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);