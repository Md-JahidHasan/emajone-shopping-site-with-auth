// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2eWRa6iTfWCPj5TPXG8qfgmpLOTG0kCw",
  authDomain: "ema-jome-simple.firebaseapp.com",
  projectId: "ema-jome-simple",
  storageBucket: "ema-jome-simple.appspot.com",
  messagingSenderId: "21655989846",
  appId: "1:21655989846:web:03723f9955210e48ce55f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;