// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1sihWQN_xYnOUQws4H4vRNwTPLSM15s",
  authDomain: "brightwave-enterprises-1595c.firebaseapp.com",
  projectId: "brightwave-enterprises-1595c",
  storageBucket: "brightwave-enterprises-1595c.appspot.com",
  messagingSenderId: "220593451885",
  appId: "1:220593451885:web:17847709e35ef9f5412064",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

export { db };
