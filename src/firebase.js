import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDQq9fEo5ZGLXU8jc7_A0tyYGa4cuskcU",
  authDomain: "fayez-slack.firebaseapp.com",
  projectId: "fayez-slack",
  storageBucket: "fayez-slack.appspot.com",
  messagingSenderId: "107234587165",
  appId: "1:107234587165:web:23fb2d6ff6609b5dd8ccf4",
  measurementId: "G-1H0KFFFF5X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
