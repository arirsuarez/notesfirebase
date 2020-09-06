import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBsi8ywm6B8lSyYCOPwfcSE3Ip6sVVVa2I",
    authDomain: "notesreac.firebaseapp.com",
    databaseURL: "https://notesreac.firebaseio.com",
    projectId: "notesreac",
    storageBucket: "notesreac.appspot.com",
    messagingSenderId: "852408463483",
    appId: "1:852408463483:web:f22087f69bf1e916d0f2de",
    measurementId: "G-PP7S1WK2LQ"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  export var db = fb.database();


