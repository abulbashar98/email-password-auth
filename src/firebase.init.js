// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFLuAGSEKH28LxweRBS8OHbikpqWyySB0",
    authDomain: "email-password-auth-bbd16.firebaseapp.com",
    projectId: "email-password-auth-bbd16",
    storageBucket: "email-password-auth-bbd16.appspot.com",
    messagingSenderId: "848244380604",
    appId: "1:848244380604:web:b2ba2c3a2708c56d4f11b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;