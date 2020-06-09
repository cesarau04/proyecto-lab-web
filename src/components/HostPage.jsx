import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import './StayNear.css';

// LOGICA DE FIREBASE

const BecomehostPage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 waves-effect waves-light center-sign bgWhite">
                <NavBar logoSize={""} current={"Log"} dark={"True"}/>
                
                <h2>WELCOME</h2>

                <div className="parallax-container z-depth-1">
                    <div className="parallax">
                    <img src="Img/stock-pictures/sT1.jpg" alt=""/>
                    </div>
                </div>

                <div className="container">
                    <div class="row">
                        <div class="col s12">
                            SleepTalk is a project in development that focuses in helping TEC students that have trouble
                            with a troublesome schedule. Currently, a couple of courses end at 9:30pm yet others start at
                            7:00am. This causes unnecessary fatigue and exhaustion in the students, specially if they live
                            far away from home or need to take the public transportation. This is why SleepTalk works in
                            such a way that a TEC Student can lease an available room near the university for other students
                            to rest in order to reduce traveling long distances at such a late hour. 
                        </div>
                        <div class="col s6">6-columns (one-half)</div>
                        <div class="col s6">6-columns (one-half)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomehostPage;