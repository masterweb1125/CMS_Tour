// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBFmA3uWi702CrWYeMlnIkLEGpdR88mTfI",
    authDomain: "travll-d540c.firebaseapp.com",
    projectId: "travll-d540c",
    storageBucket: "travll-d540c.appspot.com",
    messagingSenderId: "975134231662",
    appId: "1:975134231662:web:b282f49a6f3eeacc92ea7f"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, facebookProvider, appleProvider };