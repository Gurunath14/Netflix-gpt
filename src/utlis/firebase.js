// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSNLna5yxDHYViBYoQD6i4aLQqBEmo-pI",
  authDomain: "netflix-gpt5.firebaseapp.com",
  projectId: "netflix-gpt5",
  storageBucket: "netflix-gpt5.appspot.com",
  messagingSenderId: "544937434442",
  appId: "1:544937434442:web:26e60ba84549d7063f75b3",
  measurementId: "G-S619H54GDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
