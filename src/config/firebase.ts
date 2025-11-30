import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxJ5viWnX9EtGdFiBDu3eBnjxjATdLQR8",
  authDomain: "semanticsearch-70ffd.firebaseapp.com",
  projectId: "semanticsearch-70ffd",
  storageBucket: "semanticsearch-70ffd.firebasestorage.app",
  messagingSenderId: "628129189292",
  appId: "1:628129189292:web:ae33b1238cc4bcaae23e09"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;