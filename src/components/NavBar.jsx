import React from 'react'
import { connect } from 'react-redux';
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

    const goHome = () => {
        history.push("/home");
    }

    const goLogin = () => {
        history.push("/login");
    }

    return (
        <div className="nav-bar">
            <div className="left">
                <ul>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Host' ? 'Active' : '') + " " + (props.bIsLoggedIn ? '':'hide-button')} onClick={goHost}>Become a Host</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Search' ? 'Active' : '') + " " + (props.bIsLoggedIn ? '':'hide-button') } onClick={goSearch}>Search</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Log' ? 'Active' : '') + " " + (props.bIsLoggedIn ? '':'hide-button')}> Sign out</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Sign' ? 'Active' : '') + " " + (props.bIsLoggedIn ? 'hide-button':'')} onClick={goSignup}>Sign up</li>
                    <li className={(props.dark === 'True' ? 'DarkNav' : '') + " " + (props.current === 'Log' ? 'Active' : '') + " " + (props.bIsLoggedIn ? 'hide-button':'')} onClick={goLogin}> Log in</li>
                </ul>
            </div>

            <div className={(props.logoSize === 'Big' ? 'logo-big' : 'logo-small')} >
                <ul>
                    <li>
                        <img src="/Img/logo.png" onClick={goHome}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bIsLoggedIn: state.auth.bIsLoggedIn
    };
}

export default connect(mapStateToProps)(NavBar);
