// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmTDZO5hZSWO4xm-0NoG8qE9zir2TvGjI",
  authDomain: "react-redux-firebase-1665b.firebaseapp.com",
  projectId: "react-redux-firebase-1665b",
  storageBucket: "react-redux-firebase-1665b.appspot.com",
  messagingSenderId: "795867592027",
  appId: "1:795867592027:web:e4f39b1d44db370e95d67e",
  measurementId: "G-JYY4L38J5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);

export default firebase;