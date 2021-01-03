import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADoPbT--3bfattVc0wACOemsncB-D3HbA",
  authDomain: "clone-d33ee.firebaseapp.com",
  databaseURL: "https://clone-d33ee.firebaseio.com",
  projectId: "clone-d33ee",
  storageBucket: "clone-d33ee.appspot.com",
  messagingSenderId: "730962755039",
  appId: "1:730962755039:web:7c134e88c055c51853186a",
  measurementId: "G-YC6983T35T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
