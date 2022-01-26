// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCma5sgpNGGcrM_8tSbJCUF_sN5WaPkk8c",
  authDomain: "logicism-auth-540b7.firebaseapp.com",
  projectId: "logicism-auth-540b7",
  storageBucket: "logicism-auth-540b7.appspot.com",
  messagingSenderId: "636451752699",
  appId: "1:636451752699:web:63aa685d6931351efb3e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();

export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
 }

//custom hook
export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user =>setCurrentUser(user));
        return unsub;
    })
    return currentUser;
}

export function  logout(){
    return signOut(auth);
}