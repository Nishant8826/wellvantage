import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYBT16cptU6OnLZSF-u_nyFVEHY8URTDY",
    authDomain: "fitgym-eb9fb.firebaseapp.com",
    projectId: "fitgym-eb9fb",
    storageBucket: "fitgym-eb9fb.firebasestorage.app",
    messagingSenderId: "771181783219",
    appId: "1:771181783219:web:00f0c55dedc091c2f468c6",
    measurementId: "G-3RE2JFY934"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
