import React from 'react'
import PlaceCard from './PlaceCard';
import './StayNear.css';
// LOGICA DE FIREBASE

const PlacesSuggestionPage = () => {
    return (
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Stay Near</span>
            <div className="row">
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>            
            </div>   
        </div>
    </div>           
    );
}

export default PlacesSuggestionPage;