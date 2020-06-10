import React from 'react'
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm'
import './StayNear.css';
import { useHistory } from "react-router-dom";

// LOGICA DE FIREBASE

const NavBar = (props) => {
    const history = useHistory();

    const goHost = () => {
        history.push("/host");
    }

    const goSearch = () => {
        history.push("/search");
    }

    const goSignup = () => {
        history.push("/signup");
    }

    return (
        <div className="nav-bar">
            <div className="left">
                <ul>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Host' ? 'Active' : '')} onClick={goHost}>Become a Host</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Search' ? 'Active' : '')} onClick={goSearch}>Search</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Sign' ? 'Active' : '')} onClick={goSignup}>Sign up</li>
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


