import { getApp, getApps, initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk0K990qAJwMJUrik5HAUQlidMZEeNXJk",
  authDomain: "prepwise1-9d903.firebaseapp.com",
  projectId: "prepwise1-9d903",
  storageBucket: "prepwise1-9d903.firebasestorage.app",
  messagingSenderId: "68933958804",
  appId: "1:68933958804:web:a14c8d2cdcef129283c881",
  measurementId: "G-8REBT3N7XX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);