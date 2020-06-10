import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage';

import { LogInAction, UserIdAction } from "./actions/index";
import { useHistory } from "react-router-dom";

const Privateroutes = props => {
    const history = useHistory();

    const isLoggedIn = props.bIsLoggedIn;
    if (isLoggedIn) {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" render={() => <Redirect to="/" />} />
                    <Route exact path="/home" component={HomePage} />
                    {/* <Route path="/404" component={Notfound} /> */}
                    {/* <Route path="*" render={() => <Redirect to="/404" />} /> */}
                </Switch>
            </Fragment>
        );
    } else {
        if (localStorage.getItem('userid') !== null) {
            let userID = localStorage.getItem('userid')
            props.dispatch(LogInAction(true))
            props.dispatch(UserIdAction(userID))
            history.push("/home");
            return (<></>)
        }
        return (
            <Fragment>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="*" render={() => <Redirect to="/login" />} />
            </Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        bIsLoggedIn: state.auth.bIsLoggedIn
    };
};

export default connect(mapStateToProps)(Privateroutes);