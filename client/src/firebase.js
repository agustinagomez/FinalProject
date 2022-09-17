// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* const {
  REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID, REACT_APP_MEASUREMENT_ID
} = process.env; */
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB47aR1ULnmv_H0PXywQGrUxZJDqbZwraE",
  authDomain: "socialsound-d3e2d.firebaseapp.com",
  projectId: "socialsound-d3e2d",
  storageBucket: "socialsound-d3e2d.appspot.com",
  messagingSenderId: "1059625110207",
  appId: "1:1059625110207:web:4480199e71e2164e67140a",
  measurementId: "G-97362QK8KY"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
