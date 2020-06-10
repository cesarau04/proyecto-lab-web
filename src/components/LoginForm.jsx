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

const LoginForm = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const handleLogin = () => {
    const myFirebase = myFirebaseInstance.getInstance();

    let currentEmail = emailRef.current.value;
    let currentPassword = passwordRef.current.value;

    if (
      currentEmail !== "" &&
      currentEmail &&
      currentPassword !== "" &&
      currentPassword
    ) {
      myFirebase
        .auth()
        .signInWithEmailAndPassword(currentEmail, currentPassword)
        .then((data) => {
          props.dispatch(LogInAction(true));
          props.dispatch(UserIdAction(data.user.uid));
          localStorage.setItem("userid", data.user.uid);
          localStorage.setItem("useremail", currentEmail);
          history.push("/home");
        })
        .catch((error) => {
          localStorage.clear();
          switch (error.code) {
            case "auth/invalid-email":
              NotificationManager.error(
                "Bad credentials",
                "Email or password are wrong",
                4000
              );
            case "auth/wrong-password":
              NotificationManager.error(
                "Bad credentials",
                "Email or password are wrong",
                4000
              );
            case "auth/user-not-found":
              NotificationManager.error(
                "No user",
                "No user was found, try sign up",
                4000
              );
            default:
              NotificationManager.error(
                "Unknown",
                "A unknown error occurred",
                4000
              );
          }
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="bgCr1 right-medium-sign right z-depth-3 waves-effect waves-light">
        <div className="row center bold">
          <h5 className="txtWhite mrgTopCorrection">Welcome</h5>
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
              className="bold btn waves-effect waves-light  btn-large blue "
              type="submit"
              onClick={handleLogin}
            >
              <p className="elegant mrgTopCorrection">Take me Home</p>
            </button>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bIsLoggedIn: state.auth.bIsLoggedIn,
  };
};

export default connect(mapStateToProps)(LoginForm);
