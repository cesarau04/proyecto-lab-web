//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './StayNear.css';

// Create a react component
const HomePage = function(){
    return <div className="container">
        <div className="z-depth-3 waves-effect waves-light center-sign">
        <div>
          <div>
              <ul>
                <li>Home</li>
                <li>People</li>
                <li>About</li>
                <li>Help</li>
              </ul></div>
            </div>
        </div>
    </div>;
};

// Take the react component and show it on the screen
export default HomePage;
