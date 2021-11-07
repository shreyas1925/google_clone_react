import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-ZYgd4OOglh0pZs9srWxHcDkoHRE1P5c",
  authDomain: "clone-11a02.firebaseapp.com",
  projectId: "clone-11a02",
  storageBucket: "clone-11a02.appspot.com",
  messagingSenderId: "836797215188",
  appId: "1:836797215188:web:4215ab3946f65db459e641",
  measurementId: "G-C1TL4755HE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
