// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "nexus-phase2.firebaseapp.com",
  projectId: "nexus-phase2",
  storageBucket: "nexus-phase2.appspot.com",
  messagingSenderId: "Sender-ID",
  appId: "API-ID",
  measurementId: "Measurement-ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);


