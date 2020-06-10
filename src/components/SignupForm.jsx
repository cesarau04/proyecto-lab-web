import React, {useRef} from 'react';

import { connect } from 'react-redux';
import myFirebaseInstance from '../firebase/myfirebase'
import { LogInAction, UserIdAction } from "../actions/index";

import { useHistory } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './StayNear.css';


const SignupForm = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const handleSignUp = () => {
        const myFirebase = myFirebaseInstance.getInstance();

        let currentEmail = emailRef.current.value
        let currentPassword = passwordRef.current.value

        if (currentEmail !== "" && currentEmail && currentPassword !== "" && currentPassword) {
            myFirebase.auth().createUserWithEmailAndPassword(currentEmail, currentPassword)
                .then((data) => {
                    NotificationManager.success('Created', 'Account was created', 4000)
                    props.dispatch(LogInAction(true))
                    props.dispatch(UserIdAction(data.user.uid))
                    localStorage.setItem('userid', data.user.uid)
                    history.push("/home");
                    const storage = myFirebase.storage()
                    storage.ref().child("users").child(data.user.uid).child("profile_pic").putString("64byte profile.png")
                    // .then((snapshot) => {
                    //     console.log(snapshot);
                    //     const db = firebase.database()
                    //     db.ref().ref('users').child(data.user.uid).child('profile')
                    // });
                })
                .catch((error) => {
                    NotificationManager.error("ERROR", "Couldn't create account", 4000)
                })
        }
    };

    return (
        <div className="bgCr1 right-medium-sign right z-depth-3">
            <div className="row center bold">
                <h5 className="txtWhite mrgTopCorrection">Sign Up</h5>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Email" id="input_email" type="email" name="aemail" className="validate" ref={emailRef} required />
                    <label htmlFor="email"></label>
                </div>
            </div>


            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="password" id="input_password" type="password" name="apassword" className="validate" ref={passwordRef} required />
                </div>
            </div>



            <div className="row center">
                <div className="col s12">
                    <button className="bold btn waves-effect waves-light  btn-large blue " type="submit" ><p className="elegant mrgTopCorrection">Register</p></button>
                </div>
            </ div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bIsLoggedIn: state.auth.bIsLoggedIn
    };
}

export default connect(mapStateToProps)(SignupForm);