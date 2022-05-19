// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTXnzblBV_T7dnBqgxK5vVrKy5GOjKSEA",
    authDomain: "fir-79ed6.firebaseapp.com",
    projectId: "fir-79ed6",
    storageBucket: "fir-79ed6.appspot.com",
    messagingSenderId: "68705966264",
    appId: "1:68705966264:web:4dcd3e6cb52f7543653c4d",
    measurementId: "G-VVWK240LNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
