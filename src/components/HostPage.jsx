import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import HostQuestions from './HostQuestions';
import ParallaxImage from './ParallaxImage';
import './StayNear.css';
// LOGICA DE FIREBASE

const BecomehostPage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgWhite">
                <NavBar logoSize={""} current={"Host"} dark={"True"}/>
                
                <h2>WELCOME FUTURE HOST</h2>

                <ParallaxImage/>

                <div className="container">
                    
                    <HostQuestions/>
                    <div className="row">
                        <div className="col s12">
                            <p className="elegant p-medium">
                                StayNear is a project in development that focuses in helping TEC students that have trouble
                                with a troublesome schedule. Currently, a couple of courses end at 9:30pm yet others start at
                                7:00am. This causes unnecessary fatigue and exhaustion in the students, specially if they live
                                far away from home or need to take the public transportation. This is why StayNear works in
                                such a way that a TEC Student can lease an available room near the university for other students
                                to rest in order to reduce traveling long distances at such a late hour. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomehostPage;