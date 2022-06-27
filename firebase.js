// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_5dABH7v2imYSKwxqpOxYTgTK-dJLt0",
  authDomain: "tukproject-ef3fb.firebaseapp.com",
  projectId: "tukproject-ef3fb",
  storageBucket: "tukproject-ef3fb.appspot.com",
  messagingSenderId: "248336453467",
  appId: "1:248336453467:web:c76794370045ccef05d47e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

console.log("✅firebase Connected✅");
