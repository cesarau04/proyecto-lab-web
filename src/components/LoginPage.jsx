import React from 'react'
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm'
import NavBar from './NavBar'
import './StayNear.css';

// LOGICA DE FIREBASE

const LoginPage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 waves-effect waves-light center-sign bgVr1">
                <NavBar current={"Log"}/>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;