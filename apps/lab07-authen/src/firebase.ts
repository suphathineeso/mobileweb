import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKHJkQv6LisO8GaCEpKbaMm7ITitcJUuk",
  authDomain: "lab07-authen-ee5fc.firebaseapp.com",
  projectId: "lab07-authen-ee5fc",
  storageBucket: "lab07-authen-ee5fc.firebasestorage.app",
  messagingSenderId: "723658010291",
  appId: "1:723658010291:web:3b005cf4dd5d88d0e74ac6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
