import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCTXnzblBV_T7dnBqgxK5vVrKy5GOjKSEA",
    authDomain: "fir-79ed6.firebaseapp.com",
    projectId: "fir-79ed6",
    storageBucket: "fir-79ed6.appspot.com",
    messagingSenderId: "68705966264",
    appId: "1:68705966264:web:4dcd3e6cb52f7543653c4d",
    measurementId: "G-VVWK240LNZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
