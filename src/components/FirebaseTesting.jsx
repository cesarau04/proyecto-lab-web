import React, { useRef, useEffect } from "react";

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

import { connect } from "react-redux";
import { LogInAction, UserIdAction } from "../actions/index";
let firebaseConfig = {
  apiKey: "AIzaSyBRlMbi0wdAxTBlL0AjrblnaQ3uJwJK5Ro",
  authDomain: "proyecto-lab-web.firebaseapp.com",
  databaseURL: "https://proyecto-lab-web.firebaseio.com",
  projectId: "proyecto-lab-web",
  storageBucket: "proyecto-lab-web.appspot.com",
  messagingSenderId: "586504378630",
  appId: "1:586504378630:web:b8ab814efa46f617046687",
};
firebase.initializeApp(firebaseConfig);

const FirebaseTesting = (props) => {
  const db = firebase.database();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleCreate = () => {
    db.ref("rooms").push("cesar", (e) => {
      console.log("done");
    });
  };

  const handleRead = () => {
    db.ref("rooms").once(
      "value",
      (snapshot) => {
        console.log(snapshot.key);

        snapshot.forEach((child) => {
          console.log(child.key);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleDelete = () => {
    db.ref("rooms").once("value", (snapshot) => {
      snapshot.forEach((child) => {
        db.ref().child("rooms").child(child.key).remove();
        console.log(child.key + " REMOVED");
      });
    });
  };

  const handleLogin = () => {
    let currentEmail = emailRef.current.value;
    let currentPassword = passwordRef.current.value;

    console.log("EMAIL -> " + currentEmail);
    console.log("PASSWORD -> " + currentPassword);
    if (
      currentEmail !== "" &&
      currentEmail &&
      currentPassword !== "" &&
      currentPassword
    ) {
      firebase
        .auth()
        .signInWithEmailAndPassword(currentEmail, currentPassword)
        .catch((error) => {
          console.error(error);
        })
        .then((data) => {
          props.dispatch(LogInAction(true));
          props.dispatch(UserIdAction(data.user.uid));
          console.log("LOG IN");
        });
    }
  };

  const handleSignUp = () => {
    let currentEmail = emailRef.current.value;
    let currentPassword = passwordRef.current.value;

    if (
      currentEmail !== "" &&
      currentEmail &&
      currentPassword !== "" &&
      currentPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(currentEmail, currentPassword)
        .catch((error) => {
          console.error(error);
        })
        .then((data) => {
          props.dispatch(LogInAction(true));
          props.dispatch(UserIdAction(data.user.uid));
          console.log("LOG IN - SIGN UP");
          const storage = firebase.storage();
          storage
            .ref()
            .child("users")
            .child(data.user.uid)
            .child("profile_pic")
            .putString("64byte profile.png");
          // .then((snapshot) => {
          //     console.log(snapshot);
          //     const db = firebase.database()
          //     db.ref().ref('users').child(data.user.uid).child('profile')
          // });
        });
    }
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        props.dispatch(LogInAction(false));
        props.dispatch(UserIdAction(""));
        console.log("SIGNED OUT ");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReduxT = () => {
    props.dispatch(LogInAction(true));
  };

  const handleReduxF = () => {
    props.dispatch(LogInAction(false));
  };

  useEffect(() => {
    console.log(props.bIsLoggedIn);
  });

  return (
    <div>
      <button onClick={handleCreate}>Create Record</button>
      <button onClick={handleRead}>Read Record</button>
      <button onClick={handleDelete}>Delete Record</button>

      <div>
        <div>
          <label htmlFor="aemail">
            <b>Email</b>
          </label>
          <input
            id="input_email"
            type="text"
            name="aemail"
            ref={emailRef}
            required
          />
        </div>

        <div>
          <label htmlFor="apassword">
            <b>Password</b>
          </label>
          <input
            id="input_password"
            type="password"
            name="apassword"
            ref={passwordRef}
            required
          />
        </div>

        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button type="submit" onClick={handleSignOut}>
          Sign Out
        </button>
        <button type="submit" onClick={handleReduxT}>
          REDUX True
        </button>
        <button type="submit" onClick={handleReduxF}>
          REDUX False
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bIsLoggedIn: state.auth.bIsLoggedIn,
  };
};

export default connect(mapStateToProps)(FirebaseTesting);
