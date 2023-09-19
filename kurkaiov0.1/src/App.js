import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { useRef } from 'react';
import { SignIn } from './components/SignIn'
import { GameWindow } from './components/GameWindow' 

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBEgxpi3uQvmXELHHhu2Y1J1A76z2unPw4",
  authDomain: "kurkaio.firebaseapp.com",
  projectId: "kurkaio",
  storageBucket: "kurkaio.appspot.com",
  messagingSenderId: "958438104188",
  appId: "1:958438104188:web:78cc1caa9f79d17cd37df9",
  measurementId: "G-R2Q2X0ZBHX"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {user ? <GameWindow /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
