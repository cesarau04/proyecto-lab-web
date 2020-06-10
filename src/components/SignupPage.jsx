import React from 'react'
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm'
import NavBar from './NavBar'
import './StayNear.css';

// LOGICA DE FIREBASE

const SignupPage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgVr8">
                <NavBar current={"Sign"} dark={"True"}/>
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupPage;