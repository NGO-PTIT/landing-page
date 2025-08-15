
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMIMGHKZymDKLubijauIq4yjwvdW-uRic",
  authDomain: "landing-page-7375e.firebaseapp.com",
  projectId: "landing-page-7375e",
  storageBucket: "landing-page-7375e.firebasestorage.app",
  messagingSenderId: "572024087843",
  appId: "1:572024087843:web:d8052f216b144ab4975896",
  measurementId: "G-985K98K6VF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);