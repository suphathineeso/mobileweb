import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy-l_g3Qc6FdjjWj94qc1nxz_uskmxaHY",
  authDomain: "lab06-expense.firebaseapp.com",
  projectId: "lab06-expense",
  storageBucket: "lab06-expense.firebasestorage.app",
  messagingSenderId: "43095205716",
  appId: "1:43095205716:web:4f6252efaca4bcf9b0cac1",
  //  measurementId ไม่ต้องใช้
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
