// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCzeZRAFe11EqoAGhydgtACI_Xvvns1X4E",
  authDomain: "netflix-gpt-db126.firebaseapp.com",
  projectId: "netflix-gpt-db126",
  storageBucket: "netflix-gpt-db126.appspot.com",
  messagingSenderId: "87151152038",
  appId: "1:87151152038:web:8f72abe6cc9ddefaf4dd67",
  measurementId: "G-WD782HD45X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
