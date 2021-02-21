import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTPOicWgg0AyP3Sd9I-xXFW7ssi-PTfd0",
  authDomain: "slack-clone-704eb.firebaseapp.com",
  projectId: "slack-clone-704eb",
  storageBucket: "slack-clone-704eb.appspot.com",
  messagingSenderId: "892695017838",
  appId: "1:892695017838:web:d150bb63da64d21828697f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };