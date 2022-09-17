import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-D6atshaGEGDaoD4u263v0XxKTWf8spw",
  authDomain: "e-comm-dbd90.firebaseapp.com",
  projectId: "e-comm-dbd90",
  storageBucket: "e-comm-dbd90.appspot.com",
  messagingSenderId: "530956513491",
  appId: "1:530956513491:web:a7b4d0c2d181b93cdfe426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;