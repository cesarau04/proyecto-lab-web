import React from 'react'
import './StayNear.css';
// LOGICA DE FIREBASE

const PlaceCard = (props) => {
    return (
    <div className={(props.rowSize === '2' ? 'col s6' : 'col s4')}>
        <div class="card blue-grey darken-1">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Img/v8.png"/>
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