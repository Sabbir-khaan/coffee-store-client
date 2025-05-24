// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1UzqIi0AAz7zPRwZiFecB2wgkEe-0BA",
  authDomain: "simple-coffee-store-app.firebaseapp.com",
  projectId: "simple-coffee-store-app",
  storageBucket: "simple-coffee-store-app.firebasestorage.app",
  messagingSenderId: "759104734888",
  appId: "1:759104734888:web:a6e09b850eccdbb9e4a49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);