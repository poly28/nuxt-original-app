import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBGq8NdF4V7ohd7jiN_vgQVcOcI_JGHggU",
    authDomain: "nuxt-original-app-6bb0e.firebaseapp.com",
    projectId: "nuxt-original-app-6bb0e",
    storageBucket: "nuxt-original-app-6bb0e.appspot.com",
    messagingSenderId: "92082324777",
    appId: "1:92082324777:web:89ea5781a84eca31e9e338",
    measurementId: "G-VLKXR48T9B"
  });
}

export default firebase;
