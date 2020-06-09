import React, { useRef } from 'react'

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"

let firebaseConfig = {
    apiKey: "AIzaSyBRlMbi0wdAxTBlL0AjrblnaQ3uJwJK5Ro",
    authDomain: "proyecto-lab-web.firebaseapp.com",
    databaseURL: "https://proyecto-lab-web.firebaseio.com",
    projectId: "proyecto-lab-web",
    storageBucket: "proyecto-lab-web.appspot.com",
    messagingSenderId: "586504378630",
    appId: "1:586504378630:web:b8ab814efa46f617046687"
};
firebase.initializeApp(firebaseConfig);

const FirebaseTesting = () => {
    const db = firebase.database()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleCreate = () => {
        db.ref('rooms').push('cesar', (e) => { console.log('done') })
    }

    const handleRead = () => {
        db.ref('rooms').once('value',
            (snapshot) => {
                console.log(snapshot.key);

                snapshot.forEach((child) => {
                    console.log(child.key);

                });
            }
            ,
            (error) => {
                console.error(error);
            }
        );
    };

    const handleDelete = () => {
        db.ref('rooms').once('value',
            (snapshot) => {
                snapshot.forEach((child) => {
                    db.ref().child('rooms').child(child.key).remove();
                    console.log(child.key + " REMOVED");
                });
            }
        );
    };

    const handleLogin = () => {
        let currentEmail = emailRef.current.value
        let currentPassword = passwordRef.current.value

        console.log("EMAIL -> " + currentEmail);
        console.log("PASSWORD -> " + currentPassword);
        if (currentEmail !== "" && currentEmail && currentPassword !== "" && currentPassword) {
            firebase.auth().signInWithEmailAndPassword(currentEmail, currentPassword)
                .catch((error) => { console.error(error); })
                .then(((data) => { console.log(data); }))
        }
    };

    const handleSignUp = () => {
        let currentEmail = emailRef.current.value
        let currentPassword = passwordRef.current.value

        console.log("EMAIL -> " + currentEmail);
        console.log("PASSWORD -> " + currentPassword);
        if (currentEmail !== "" && currentEmail && currentPassword !== "" && currentPassword) {
            firebase.auth().createUserWithEmailAndPassword(currentEmail, currentPassword)
                .catch((error) => { console.error(error); })
                .then((data) => { console.log(data); })
        }
    };

    return (
        <div>
            <button onClick={handleCreate}>Create Record</button>
            <button onClick={handleRead}>Read Record</button>
            <button onClick={handleDelete}>Delete Record</button>

            <div>
                <div>
                    <label htmlFor="aemail"><b>Email</b></label>
                    <input id="input_email" type="text" name="aemail" ref={emailRef} required />
                </div>

                <div>
                    <label htmlFor="apassword"><b>Password</b></label>
                    <input id="input_password" type="password" name="apassword" ref={passwordRef} required />
                </div>

                <button type="submit" onClick={handleSignUp}>Sign Up</button>
                <button type="submit" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default FirebaseTesting;