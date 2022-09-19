// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID, REACT_APP_MEASUREMENT_ID
} = process.env;
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: REACT_APP_API_KEY || "AIzaSyBPKI7vQMDH5QRf0qkOPac0sPiz2LA-k5E",
//   authDomain: REACT_APP_AUTH_DOMAIN || "social-sound-58b2e.firebaseapp.com",
//   projectId: REACT_APP_PROJECT_ID || "social-sound-58b2e",
//   storageBucket: REACT_APP_STORAGE_BUCKET || "social-sound-58b2e.appspot.com",
//   messagingSenderId: REACT_APP_MESSAGING_SENDER_ID || "101040439284",
//   appId: REACT_APP_APP_ID || "1:101040439284:web:719ba7cf95f279117dc3a1",
//   measurementId: REACT_APP_MEASUREMENT_ID || ''
// };
// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByL1GnE8KpgM1GmUgU4Ok3L6lBbf-KPhA",
  authDomain: "sound-app-ab726.firebaseapp.com",
  projectId: "sound-app-ab726",
  storageBucket: "sound-app-ab726.appspot.com",
  messagingSenderId: "947453812089",
  appId: "1:947453812089:web:6ddc19304032090a97a3a8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
