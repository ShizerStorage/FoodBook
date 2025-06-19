import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjPBmqZTkx7sWDc_CzJ5IbSXAf7XstT90",
    authDomain: "recipeapp-1e468.firebaseapp.com",
    projectId: "recipeapp-1e468",
    storageBucket: "recipeapp-1e468.firebasestorage.app",
    messagingSenderId: "153556429608",
    appId: "1:153556429608:web:5fb3ab23b63e74aaedfe1d",
    measurementId: "G-2PSKGLS7D6"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
