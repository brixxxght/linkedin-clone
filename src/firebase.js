import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4V-yb-_bnDX5ud0hcyEJHWllGp_Gp4YY",
    authDomain: "linkedin-clone-9a683.firebaseapp.com",
    projectId: "linkedin-clone-9a683",
    storageBucket: "linkedin-clone-9a683.appspot.com",
    messagingSenderId: "311654688180",
    appId: "1:311654688180:web:3f2f7f1a8774b8f5babee1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }