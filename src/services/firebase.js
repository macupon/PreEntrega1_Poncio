
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY_kkFfa1Wdg8dg8iG8CPxrYvGYKcx-kk",
    authDomain: "apliquesmarian-f1b9d.firebaseapp.com",
    projectId: "apliquesmarian-f1b9d",
    storageBucket: "apliquesmarian-f1b9d.appspot.com",
    messagingSenderId: "255141573846",
    appId: "1:255141573846:web:b7284837d1bc5863144577"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);