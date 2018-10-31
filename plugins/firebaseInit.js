import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBeCLRNe4mciaoYZ3MzNrV9kA71eiiJDtw",
  authDomain: "lfgroup-54138.firebaseapp.com",
  databaseURL: "https://lfgroup-54138.firebaseio.com",
  projectId: "lfgroup-54138",
  storageBucket: "lfgroup-54138.appspot.com",
  messagingSenderId: "256951065917"
};

//!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app()
}

firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase.firestore();
