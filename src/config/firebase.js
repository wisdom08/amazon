import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCTXnzblBV_T7dnBqgxK5vVrKy5GOjKSEA",
    authDomain: "fir-79ed6.firebaseapp.com",
    projectId: "fir-79ed6",
    storageBucket: "fir-79ed6.appspot.com",
    messagingSenderId: "68705966264",
    appId: "1:68705966264:web:4dcd3e6cb52f7543653c4d",
    measurementId: "G-VVWK240LNZ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };
