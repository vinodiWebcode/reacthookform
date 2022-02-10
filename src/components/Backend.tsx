// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {  ref } from "firebase/storage";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqtCFjN_oTXTeqhtPMjQk4iEeVkK7bnw",
  authDomain: "reactform-32140.firebaseapp.com",
  databaseURL: "https://reactform-32140-default-rtdb.firebaseio.com",
  projectId: "reactform-32140",
  storageBucket: "reactform-32140.appspot.com",
  messagingSenderId: "950056316015",
  appId: "1:950056316015:web:652036280a0746af08b19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const cloudStorageRef = ref;
export const storage = getStorage(app)


