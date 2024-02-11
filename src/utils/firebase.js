// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2vDUaI-3Mmp0Z9aesPXE4c_Ix0WWiCIE",
  authDomain: "netflixgpt-14b08.firebaseapp.com",
  projectId: "netflixgpt-14b08",
  storageBucket: "netflixgpt-14b08.appspot.com",
  messagingSenderId: "904324778633",
  appId: "1:904324778633:web:cfb7810a3d4a08ce16d458",
  measurementId: "G-SEH055WH9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
