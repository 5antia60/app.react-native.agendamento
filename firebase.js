// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
// import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAbTYRsV1g20SoHGDs31v-ZUD2JQim-do",
  authDomain: "agendamento-de-reuniao-app.firebaseapp.com",
  projectId: "agendamento-de-reuniao-app",
  storageBucket: "agendamento-de-reuniao-app.appspot.com",
  messagingSenderId: "543458276382",
  appId: "1:543458276382:web:08d8b7af2a0779c6216a0f",
  measurementId: "G-GDCBF9SSQG"
};

// Initialize Firebase
let app;
let db;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);

    // Firestore Reference
    db = getFirestore(app);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth, db}; 
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);