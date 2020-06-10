import React from 'react';

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"
import "firebase/storage"

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

class MyFirebaseClass {
    getInstance() {
        return firebase;
    }
}

const myFirebaseInstance = new MyFirebaseClass();
export default myFirebaseInstance;