import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa3NMNTcoXg3OOnr56Tr7d5KmuiTZJ6KU",
  authDomain: "slack-clone-c5685.firebaseapp.com",
  projectId: "slack-clone-c5685",
  storageBucket: "slack-clone-c5685.appspot.com",
  messagingSenderId: "19479653870",
  appId: "1:19479653870:web:d70468a5f9cea9f87bb2ff",
  measurementId: "G-KZ9XZDKNMT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
