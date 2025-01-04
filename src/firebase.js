// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBanmXf4EOdw6aV_Baz6yjk9SguWSak9eQ",
  authDomain: "cursocorbin.firebaseapp.com",
  projectId: "cursocorbin",
  storageBucket: "cursocorbin.firebasestorage.app",
  messagingSenderId: "552463777774",
  appId: "1:552463777774:web:07d0d08f2b835ca1de58ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };