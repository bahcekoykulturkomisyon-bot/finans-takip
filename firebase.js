import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBD6su5YDdWdrj6mGyLQFvVbuyNi7nkE0c",
  authDomain: "finans-takip-ca2e0.firebaseapp.com",
  projectId: "finans-takip-ca2e0",
  storageBucket: "finans-takip-ca2e0.firebasestorage.app",
  messagingSenderId: "432152727342",
  appId: "1:432152727342:web:59bd21727c6820cf2fb4bf",
  measurementId: "G-SR7FB17V3T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
