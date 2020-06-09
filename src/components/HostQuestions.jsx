import React from 'react'
import ReactDOM from 'react-dom';
import './StayNear.css';

// LOGICA DE FIREBASE

const HostQuestions = () => {
    return (
        <div>
            <div className="row valign-wrapper">
                        <div className="col s6">
                            <h4>
                                Care about students safety?
                            </h4>
                        </div>
                        <div className="col s6">
                            <img className="img-medium" src="Img/v10.png" alt=""/>
                        </div>
                    </div>
                    <div className="row valign-wrapper">
                        <div className="col s6">
                            <img className="img-medium" src="Img/v1.png" alt=""/>
                        </div>
                        <div className="col s6">
                            <h4>
                                Have free rooms available?
                            </h4>
                        </div>
                    </div>
                    <div className="row valign-wrapper">
                        <div className="col s6">
                            <h4>
                                Wanna make some extra cash?
                            </h4>
                        </div>
                        <div className="col s6">
                            <img className="img-medium" src="Img/v9.png" alt=""/>
                        </div>
                    </div>
        </div>
    );
}

export default HostQuestions;