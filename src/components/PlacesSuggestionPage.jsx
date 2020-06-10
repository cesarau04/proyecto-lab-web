import React from 'react'
import PlaceCard from './PlaceCard';
import './StayNear.css';
// LOGICA DE FIREBASE

const PlacesSuggestionPage = () => {
    return (
    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
            <span className="card-title">Stay Near</span>
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