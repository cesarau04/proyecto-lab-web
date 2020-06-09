import React from 'react'
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm'
import './StayNear.css';

// LOGICA DE FIREBASE

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="left">
                <ul>
                    <li>Home</li>
                    <li>People</li>
                    <li>About</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className="right">
                <lu>
                    <li>
                        LOGO
                </li>
                </lu>
            </div>
        </div>
    );
}

export default NavBar;


