import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAbTYRsV1g20SoHGDs31v-ZUD2JQim-do",
  authDomain: "agendamento-de-reuniao-app.firebaseapp.com",
  projectId: "agendamento-de-reuniao-app",
  storageBucket: "agendamento-de-reuniao-app.appspot.com",
  messagingSenderId: "543458276382",
  appId: "1:543458276382:web:08d8b7af2a0779c6216a0f",
  measurementId: "G-GDCBF9SSQG"
};

let app;
let db;
let database;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);

    db = getFirestore(app);
    database = db;
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth, db, database};
export const responseEmailUrl = 'https://agendamento-de-reuniao-app.web.app/{meetingId}/{invitedId}';
