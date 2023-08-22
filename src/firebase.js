import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOFfPkgN9d_7vOkd12pYjjxj5d0bR0Y7Y",
  authDomain: "fire-chat-ce565.firebaseapp.com",
  databaseURL: "https://fire-chat-ce565-default-rtdb.firebaseio.com",
  projectId: "fire-chat-ce565",
  storageBucket: "fire-chat-ce565.appspot.com",
  messagingSenderId: "960275308661",
  appId: "1:960275308661:web:71a42f0893e71cfd8fd83c",
  measurementId: "G-0Z6DE780H3"
};
firebase.initializeApp(firebaseConfig);

export default firebase;