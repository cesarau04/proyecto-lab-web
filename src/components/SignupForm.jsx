import React, { useRef } from "react";

import { connect } from "react-redux";
import myFirebaseInstance from "../firebase/myfirebase";
import { LogInAction, UserIdAction } from "../actions/index";

import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "./StayNear.css";

const SignupForm = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const history = useHistory();

  const handleSignUp = () => {
    const myFirebase = myFirebaseInstance.getInstance();

    let currentEmail = emailRef.current.value;
    let currentPassword = passwordRef.current.value;
    let currentUsername = usernameRef.current.value;
    let currentPhoneNumber = phoneNumberRef.current.value;

    if (
      currentEmail !== "" &&
      currentEmail &&
      currentPassword !== "" &&
      currentPassword &&
      currentUsername &&
      currentUsername !== "" &&
      currentPhoneNumber &&
      currentPhoneNumber !== ""
    ) {
      myFirebase
        .auth()
        .createUserWithEmailAndPassword(currentEmail, currentPassword)
        .then((data) => {
          NotificationManager.success("Created", "Account was created", 4000);
          props.dispatch(LogInAction(true));
          props.dispatch(UserIdAction(data.user.uid));
          localStorage.setItem("userid", data.user.uid);
          localStorage.setItem("useremail", currentEmail);
          localStorage.setItem("username", currentUsername);
          history.push("/home");
          const storage = myFirebase.storage();
          storage
            .ref()
            .child("users")
            .child(data.user.uid)
            .child("profile_pic")
            .putString("64byte profile.png")
            .then((snapshot) => {
              console.log(snapshot);
              myFirebase
                .database()
                .ref("users")
                .child(data.user.uid)
                .child("profile")
                .set({
                  email: currentEmail,
                  username: currentUsername,
                  picture: "a profile pic",
                  phonenumber: currentPhoneNumber,
                });
            });
        })
        .catch((error) => {
          NotificationManager.error("ERROR", "Couldn't create account", 4000);
        });
    }
  };

  return (
    <div className="bgCr1 right-medium-sign right z-depth-3">
      <div className="row center bold">
        <h5 className="txtWhite mrgTopCorrection">Sign Up</h5>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Username"
            id="input_username"
            type="text"
            name="ausername"
            className="validate"
            ref={usernameRef}
            required
          />
          <label htmlFor="email"></label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Phone Number"
            id="input_username"
            type="tel"
            name="aphonenumer"
            className="validate"
            ref={phoneNumberRef}
            required
          />
          <label htmlFor="(+XX) XXX XXX XX XX"></label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Email"
            id="input_email"
            type="email"
            name="aemail"
            className="validate"
            ref={emailRef}
            required
          />
          <label htmlFor="email"></label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="password"
            id="input_password"
            type="password"
            name="apassword"
            className="validate"
            ref={passwordRef}
            required
          />
        </div>
      </div>

      <div className="row center">
        <div className="col s12">
          <button
            className="bold waves-effect waves-light  btn-large blue "
            type="submit"
            onClick={handleSignUp}
          >
            <p className="mrgTopCorrection">Register</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bIsLoggedIn: state.auth.bIsLoggedIn,
  };
};

export default connect(mapStateToProps)(SignupForm);
