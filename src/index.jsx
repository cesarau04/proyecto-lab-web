import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'materialize-css/dist/css/materialize.min.css';
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <SignupPage />
  </React.StrictMode>,
  document.getElementById('root')
);
