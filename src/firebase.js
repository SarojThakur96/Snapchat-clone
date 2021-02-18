import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBsfiwCNMVgxa-ZkHIseQqFywAqIyNYar0",
  authDomain: "snapchat-358de.firebaseapp.com",
  projectId: "snapchat-358de",
  storageBucket: "snapchat-358de.appspot.com",
  messagingSenderId: "428955850483",
  appId: "1:428955850483:web:3a1ecdb71da9e49a3c8986",
  measurementId: "G-PLWTXVMJ3M"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
