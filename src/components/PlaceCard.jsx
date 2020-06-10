import React from 'react'
import './StayNear.css';
// LOGICA DE FIREBASE

const PlaceCard = (props) => {
    return (
    <div className={(props.rowSize === '2' ? 'col s6' : 'col s4')}>
        <div className="card blue-grey darken-1">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="Img/v8.png"/>
                </div>
            <div className="card-content white-text">
                <span className="card-title">Cuarto #1</span>
                <p>Descripción 1</p>
                <p>Precio $$$$$$</p>
            </div>
        </div>
    </div>
    );
}

export default PlaceCard;