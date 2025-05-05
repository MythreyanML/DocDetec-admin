// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCO8ucM9GNkxgIVUHYlb7dYx2gwa5E-v_c",
    authDomain: "docdetec.firebaseapp.com",
    projectId: "docdetec",
    storageBucket: "docdetec.firebasestorage.app",
    messagingSenderId: "503534317679",
    appId: "1:503534317679:web:279b0dde6fa75d12721d9a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Use Firestore instead of Realtime Database
const auth = getAuth(app);
const storage = getStorage(app);

// Debug log
console.log('Firebase initialized:', {
    app: !!app,
    db: !!db,
    auth: !!auth,
    storage: !!storage
});

export { db, auth, app, storage };