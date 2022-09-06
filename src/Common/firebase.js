import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3i-675fV8irBWRDrVd9gFpT03ZNoP-U0",
    authDomain: "blog-app-f22d2.firebaseapp.com",
    projectId: "blog-app-f22d2",
    storageBucket: "blog-app-f22d2.appspot.com",
    messagingSenderId: "460397622139",
    appId: "1:460397622139:web:91ac822bf40bc5658403de",
    measurementId: "G-49DYRBMNL7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;