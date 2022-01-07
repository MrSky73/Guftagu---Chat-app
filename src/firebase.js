import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDYu8U1CP72Pkem49Qi7soI8_Pyl2rGh-E",
  authDomain: "chat-app-f41eb.firebaseapp.com",
  projectId: "chat-app-f41eb",
  storageBucket: "chat-app-f41eb.appspot.com",
  messagingSenderId: "167183801560",
  appId: "1:167183801560:web:e8f9b777a0691d08780bad",
}).auth();
