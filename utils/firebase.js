// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbRLl2uYrcNRRt8ph9nqviRRA9Jux_YCM",
  authDomain: "nexus-phase2.firebaseapp.com",
  projectId: "nexus-phase2",
  storageBucket: "nexus-phase2.appspot.com",
  messagingSenderId: "581842221082",
  appId: "1:581842221082:web:ea433aef17ab12408cb9a3",
  measurementId: "G-86KLFHNY08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);


