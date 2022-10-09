// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2rcGlIaYvELwHSQ862XgOYcpw53oEYD0",
  authDomain: "car-services-410c9.firebaseapp.com",
  projectId: "car-services-410c9",
  storageBucket: "car-services-410c9.appspot.com",
  messagingSenderId: "593951601206",
  appId: "1:593951601206:web:09bf11f26a9a2ce233de97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;