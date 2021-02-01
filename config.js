import firebase from "firebase";
require("@firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyBNgR9HHY9ev3DZsxhLVuxT7LWa3at22ZA",
    authDomain: "book-santa-89cd5.firebaseapp.com",
    projectId: "book-santa-89cd5",
    storageBucket: "book-santa-89cd5.appspot.com",
    messagingSenderId: "397713266281",
    appId: "1:397713266281:web:90f04bc1bf4fc422ce74f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();