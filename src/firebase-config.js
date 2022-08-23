import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCTzpQ1X_uRsGjtx9QMN6QfFTaZ24iN9KE",
  authDomain: "mbook-52ec5.firebaseapp.com",
  projectId: "mbook-52ec5",
  storageBucket: "mbook-52ec5.appspot.com",
  messagingSenderId: "981542206905",
  appId: "1:981542206905:web:bd1b38d4360bacb9f34a68",
  measurementId: "G-7P45872KF5"
};

const app=firebase.initializeApp(firebaseConfig);
const db=app.firestore();
const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
