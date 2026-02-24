// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// ...analytics import removed...
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEXexn5KuugRWMvueHh7rs4jMBpA3LQok",
  authDomain: "abtekindo-82fe9.firebaseapp.com",
  projectId: "abtekindo-82fe9",
  storageBucket: "abtekindo-82fe9.firebasestorage.app",
  messagingSenderId: "960230797659",
  appId: "1:960230797659:web:11229bed11359df35bea7e",
  measurementId: "G-7R03BN0CLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ...analytics initialization removed...

export { app };