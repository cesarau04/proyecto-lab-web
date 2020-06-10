//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import HostQuestions from './HostQuestions';
import ParallaxImage from './ParallaxImage';
import './StayNear.css';


// Create a react component
const HomePage = function () {
  return <div className="container center">
    <div className="z-depth-3 center-sign bgVr1">
      <NavBar logoSize={"Big"} current={""}/>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <ParallaxImage/>
      <div className="container">
      <h3 className="center">About the Project</h3>
      <p className="txtBlack elegant">
      SleepTalk is a project in development that focuses in helping TEC students that have trouble with a troublesome
      schedule. Currently, a couple of courses end at 9:30pm yet others start at 7:00am. This causes unnecessary fatigue
      and exhaustion in the students, specially if they live far away from home or need to take the public transportation.
      This is why SleepTalk works in such a way that a TEC Student can lease an available room near the university for
      other students to rest in order to reduce traveling long distances at such a late hour. 
      </p>

      <h3>Major Requirements</h3>

      <ul>
        <li className="txtBlack elegant">
        Backend: Golang
        </li><br/>
        <li className="txtBlack elegant">
        Frontend: Vue.js
        </li><br/>
        <li className="txtBlack elegant"><br/>
        Project should work as an API for it to have a web and mobile version. 
        </li>
        <li className="txtBlack elegant">
          <ul>
            <li className="txtBlack elegant">
            Only valid student IDs will have access to the platform.
            </li><br/>
            <li className="txtBlack elegant">
            Private user information should only be seen by another user that has agreed to rent the room.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Development Team</h3>

        <p className="txtBlack elegant">
        César Augusto García Pérez <br/>
        Fernando Partida Milanés <br/>
        Ricardo Palma Mendoza <br/>
        Adler Alonso Zamora Ruiz

        </p>
      </div>
    </div>
  </div>;
};

// Take the react component and show it on the screen
export default HomePage;
