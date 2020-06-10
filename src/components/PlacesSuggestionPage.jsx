import React from 'react'
import PlaceCard from './PlaceCard';
import './StayNear.css';
// LOGICA DE FIREBASE

const PlacesSuggestionPage = (props) => {
    return (
    <div className={(props.background === 'true' ? 'card blue-grey darken-1' : '')}>
        <div className={(props.background === 'true' ? 'card-content white-text' : '')}>
            <div className="row">
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>
                <PlaceCard rowSize={props.rowSize}/>            
            </div>   
        </div>
    </div>           
    );
}

export default PlacesSuggestionPage;