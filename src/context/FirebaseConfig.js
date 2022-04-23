import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyADAFAzpP19wRdyQSH1a4HMC3mRnA1nttY",
  authDomain: "gi472week14.firebaseapp.com",
  projectId: "gi472week14",
  storageBucket: "gi472week14.appspot.com",
  messagingSenderId: "166580429742",
  appId: "1:166580429742:web:1f30ac23f045929b901e3f",
  measurementId: "G-QYPND00LN9",
  databaseURL: "https://gi472week14-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);

export default firebase;