import firebase from "firebase"

 const firebaseConfig = {
    apiKey: "AIzaSyDNfzgHQpEWbPA2Tt9Pug9b2REzomuzc0A",
    authDomain: "clone-948b1.firebaseapp.com",
    projectId: "clone-948b1",
    storageBucket: "clone-948b1.appspot.com",
    messagingSenderId: "558778985363",
    appId: "1:558778985363:web:bb9c1c79ee5c95161c5666"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth(); 
  export default firebaseConfig;
  export {db,auth};