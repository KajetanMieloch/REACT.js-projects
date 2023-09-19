import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { SignOut } from './SignOut'
import { NavBar } from './NavBar'
import chicken from '../Images/ChickenClick.png'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth();
const firestore = firebase.firestore();


export const GameWindow = () =>{


    const messagesRef = firestore.collection('click');
    const query = messagesRef.orderBy('times', 'desc').limit(1);
    
    const [messages] = useCollectionData(query, {idField: 'id'});

 
    const [clickedValue, setClickedValue] = useState(0);
    
    const Loading = () =>{
        messages.map(number => setClickedValue(number.times))

    }

    const ClickCount = () =>{
        setClickedValue(clickedValue + 1)
        sendMessage()
    }

    const sendMessage = async() => {

        await messagesRef.add({
          times: clickedValue,
        })
    }

    return(
        <>
            <NavBar/>
            <p>{`It was clicked ${clickedValue} times`}</p>
            <img onClick={ClickCount} src={chicken}></img>
            <div>
             {messages && messages.map(msg => <Counter key={msg.id} messages={msg}/>)}
            </div>
        </>
    )
}

const Counter = (props) =>{
    const {times, uid} = props.messages
  
    return( 
    <div>
      <p>{`Highest score: ${times}`}</p>
    </div>
    )
}