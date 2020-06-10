import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Becomehost from './components/HostPage';
import ProfilePage from './components/ProfilePage';
import PlacePage from './components/PlacePage';
import 'materialize-css/dist/css/materialize.min.css';
import './fonts/theboldfont-regular.ttf'
import './fonts/champagne-regular.ttf'
import './fonts/champagne-italic.ttf'
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <PlacePage/>
  </React.StrictMode>,
  document.getElementById('root')
);
