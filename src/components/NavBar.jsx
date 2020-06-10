import React from 'react'
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm'
import './StayNear.css';

// LOGICA DE FIREBASE

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="left">
                <ul>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Host' ? 'Active' : '')}>Become a Host</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Help' ? 'Active' : '')}>Help</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Sign' ? 'Active' : '')}>Sign up</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Log' ? 'Active' : '')}> Log in</li>
                </ul>
            </div>

            <div className={(props.logoSize === 'Big' ? 'logo-big' : 'logo-small')} >
                <ul>
                    <li>
                        <img src="/Img/logo.png" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

