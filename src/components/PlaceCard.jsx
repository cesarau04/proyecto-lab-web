import React from 'react'
import './StayNear.css';
// LOGICA DE FIREBASE

const PlaceCard = (props) => {
    return (
    <div className={(props.rowSize === '2' ? 'col s6' : 'col s4')}>
        <div className="card  blue darken-2">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="Img/v8.png"/>
                </div>
            <div className="card-content white-text">
                <span className="card-title bold"><h5 className="txtWhite">{props.title}</h5></span>
                <p>{props.description}</p>
                <p className="bold">{props.price}$</p>
            </div>
        </div>
    </div>
    );
}

export default PlaceCard;