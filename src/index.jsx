import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Becomehost from './components/HostPage';
import ProfilePage from './components/ProfilePage';
import PlacePage from './components/PlacePage';
import HostPage from './components/HostPage';
import SearchPage from './components/SearchPage'
import 'materialize-css/dist/css/materialize.min.css';
import './fonts/theboldfont-regular.ttf'
import './fonts/champagne-regular.ttf'
import './fonts/champagne-italic.ttf'
import 'typeface-roboto'

import { createStore } from "redux";
import reducer from './reducers/index'
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Privateroutes from './Privateroutes'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="logout" exact component={} /> */}
          <Route path='/' exact component={Privateroutes} />
          <Route path='/' component={Privateroutes} />
          {/* <HomePage /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
