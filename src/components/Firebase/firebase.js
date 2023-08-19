import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPtCHT6aEjJmWFFW6f8pWDKjdLDnAP3W4",
  authDomain: "unified-surfer-324710.firebaseapp.com",
  projectId: "unified-surfer-324710",
  storageBucket: "unified-surfer-324710.appspot.com",
  messagingSenderId: "942969899592",
  appId: "1:942969899592:web:3f1fb398be2560a3e3a67d",
  measurementId: "G-JKTTBF4M8D",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
