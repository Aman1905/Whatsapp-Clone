import firebase from "firebase";
import firestore from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRnjW466jE9A9aCqiwu4qLBmTLLWh05Kc",
  authDomain: "whatsapp-clone-d2528.firebaseapp.com",
  projectId: "whatsapp-clone-d2528",
  storageBucket: "whatsapp-clone-d2528.appspot.com",
  messagingSenderId: "667982133769",
  appId: "1:667982133769:web:00e759b4cb9d22bd9a16d8",
  measurementId: "G-NVGCMB5NT1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.firestore()

const db = firebaseApp.firestore();
// for database

const auth = firestore.auth();
// for firebase authentication

const provider = new firebase.auth.GoogleAuthProvider();
// for google authentication

export {auth, provider};
export default db;