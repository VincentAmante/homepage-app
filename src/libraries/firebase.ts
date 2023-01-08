/**
 * Connects the app to Firebase
 */
import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'

// Connects to the Firebase App
export const firebaseApp = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "aisen-homepageapp.firebaseapp.com",
    databaseURL: "https://aisen-homepageapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aisen-homepageapp",
    storageBucket: "aisen-homepageapp.appspot.com",
    messagingSenderId: "552861074191",
    appId: "1:552861074191:web:cb92710cae6ac8eae5f47a"
})

const db = getDatabase(firebaseApp)