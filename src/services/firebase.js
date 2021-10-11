import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqxulrq32tX_ddUoye8muv7E2hTVvL02E",
  authDomain: "react-aemazon.firebaseapp.com",
  projectId: "react-aemazon",
  storageBucket: "react-aemazon.appspot.com",
  messagingSenderId: "964628344398",
  appId: "1:964628344398:web:17a42e0989fefb5e87dd1f",
  measurementId: "G-0HMS2MW4HS",
};


const app = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, googleProvider };






















// import * as firebase from "firebase";
// import firebase from "firebase";


// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBqxulrq32tX_ddUoye8muv7E2hTVvL02E",
//   authDomain: "react-aemazon.firebaseapp.com",
//   projectId: "react-aemazon",
//   storageBucket: "react-aemazon.appspot.com",
//   messagingSenderId: "964628344398",
//   appId: "1:964628344398:web:17a42e0989fefb5e87dd1f",
//   measurementId: "G-0HMS2MW4HS",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };