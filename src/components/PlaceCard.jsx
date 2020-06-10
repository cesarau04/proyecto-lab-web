import React from 'react'
import './StayNear.css';
// LOGICA DE FIREBASE

const PlaceCard = () => {
    return (
    <div className="col s4">
        <div class="card blue-grey darken-1">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Img/v8.png"/>
                </div>
            <div class="card-content white-text">
                <span class="card-title">Cuarto #1</span>
                <p>Descripción 1</p>
                <p>Precio $$$$$$</p>
            </div>
        </div>
    </div>
    );
}

export default PlaceCard;