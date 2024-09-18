import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDh1cJ_6SMYf0k3N-tJk0N4kSE-o13LZrw",
    authDomain: "evangadi--clone-aa7e3.firebaseapp.com",
    projectId: "evangadi--clone-aa7e3",
    storageBucket: "evangadi--clone-aa7e3.appspot.com",
    messagingSenderId: "174336399354",
    appId: "1:174336399354:web:a0a9fbfda428fe98deb643",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
