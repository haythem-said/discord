import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDgOERReOga7PWBY1Q0VZ2NKXyAzEfMR7s",
  authDomain: "discordclone-34720.firebaseapp.com",
  projectId: "discordclone-34720",
  storageBucket: "discordclone-34720.appspot.com",
  messagingSenderId: "1076401258345",
  appId: "1:1076401258345:web:2f3c990304c273d7a207f8",
  measurementId: "G-4FMX8EW8QC",
};
const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
