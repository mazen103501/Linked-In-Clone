// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9qdihaAqnAF16fTA9ghv9K-QT5pgFA4Q",
  authDomain: "linkedin-clone-eebae.firebaseapp.com",
  projectId: "linkedin-clone-eebae",
  storageBucket: "linkedin-clone-eebae.appspot.com",
  messagingSenderId: "935120846206",
  appId: "1:935120846206:web:5cd5bcce7f48dddcc5872f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
