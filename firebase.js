import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDg6Sq11OjcuI2eo8p47_rDweKA2zYhL54",
    authDomain: "authfullstack.firebaseapp.com",
    projectId: "authfullstack",
    storageBucket: "authfullstack.appspot.com",
    messagingSenderId: "509859175044",
    appId: "1:509859175044:web:1a49e7b4be0ce05fb2c0d1",
    measurementId: "G-PHNLYPKQED"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
async function  gAuth(){
 return  signInWithPopup(auth,provider);

}
function signout(){
  signOut(auth);
}
 export {gAuth,signout};