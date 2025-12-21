// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYNUE6vEWAqyJ-yMc2wei13r9XSTAVrlc",
  authDomain: "nebulavault-1d1fe.firebaseapp.com",
  projectId: "nebulavault-1d1fe",
  storageBucket: "nebulavault-1d1fe.firebasestorage.app",
  messagingSenderId: "1008477516212",
  appId: "1:1008477516212:web:9ccf10905fb950fb3d82e1",
  measurementId: "G-QBJDLJXGC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);