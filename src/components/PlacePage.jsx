import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import PlacesSuggestionPage from './PlacesSuggestionPage'
import './StayNear.css';
// LOGICA DE FIREBASE

const PlacePage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgWhite">
                <NavBar logoSize={""} current={""} dark={"True"} />
                <div className="container">
                    <h4>Place Info</h4>
                    <div className="row">
                        <div className="col s12 m8">

                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <img className="img-medium waves-effect waves-light " src="Img/stock-pictures/room-stock.png" alt="" />
                                    Place Pictures
                                </div>
                            </div>
                        </div>
                        <div className="col s4 waves-effect waves-light ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Cuarto en Solares</span>
                                    <p>300$ por </p> <a href="">Juan Perez</a>
                                </div>
                            </div>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Descripción</span>
                                    <p>-Un cuarto disponible en Solares cerca del TEC Campus Guadalajara</p>
                                    <p>-Cuenta con baño proio. Uso exclusivo para estudiantes del TEC sin importar el género</p>
                                </div>
                            </div>
                            <a className="waves-effect waves-light btn-large">STAY IN HERE</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <PlacesSuggestionPage rowSize={"2"} background={"true"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlacePage;