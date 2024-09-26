import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAM52fZUsZ-TP4j-LHpjFsK_390p_KRKmU",
    authDomain: "clone-24dff.firebaseapp.com",
    projectId: "clone-24dff",
    storageBucket: "clone-24dff.appspot.com",
    messagingSenderId: "734200897400",
    appId: "1:734200897400:web:113496cdcc889b4473728d",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
