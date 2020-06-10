import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import PlacesSuggestionPage from './PlacesSuggestionPage'
import './StayNear.css';
// LOGICA DE FIREBASE

const ProfilePage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgWhite">
                <NavBar logoSize={""} current={""} dark={"True"}/>
                    <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <img className="img-medium waves-effect waves-light " src="Img/v11.png" alt=""/>
                            Profile Picture
                        </div>
                        <div className="col s8 waves-effect waves-light ">
                            <h4>Profile Info</h4>
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Matrícula</span>
                                    <p>A01630908</p>
                                </div>
                            </div>
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Historial</span>
                                    <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                                    <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <PlacesSuggestionPage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;