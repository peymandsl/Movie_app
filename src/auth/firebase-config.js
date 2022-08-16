import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDJ0CYP8WhivS0ochqbGit_KYIKNlnU4AQ",
    authDomain: "reactmovieapp-5ebec.firebaseapp.com",
    databaseURL: "https://reactmovieapp-5ebec-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactmovieapp-5ebec",
    storageBucket: "reactmovieapp-5ebec.appspot.com",
    messagingSenderId: "572418881805",
    appId: "1:572418881805:web:cafd98db41bd4965871844"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);