import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { useRef } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth();
const firestore = firebase.firestore();

export const SignOut = () =>{
    return auth.currentUser &&(
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }