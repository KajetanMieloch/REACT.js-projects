import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './SignIn.module.css'
import { NavBar } from './NavBar'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'


const auth = firebase.auth();
const firestore = firebase.firestore();

export const SignIn = () =>{
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    

    return(
        <>
        <NavBar/>
        <h1 className={styles.h1}>Welcome to Kurka.IO</h1>
        <div className={styles.bgimg} />
        <button className={styles.btn} onClick={signInWithGoogle}>Sign in with google</button>
        </>
    )
  }