import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase-config.js";

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User is logged in.");
  } else {
    console.log("User is not logged in.");
  }
});
