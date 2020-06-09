//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import './StayNear.css';


// Create a react component
const HomePage = function () {
  return <div className="container center">
    <div className="z-depth-3 waves-effect waves-light center-sign bgVr1">
      <NavBar />
    </div>
  </div>;
};

// Take the react component and show it on the screen
export default HomePage;
