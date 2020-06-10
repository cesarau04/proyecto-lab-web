import React from 'react'
import PlaceCard from './PlaceCard';
import './StayNear.css';
// LOGICA DE FIREBASE

const MyRooms = (props) => {
    return (
    <div class={(props.background === 'true' ? 'card blue-grey darken-1' : '')}>
        <div class={(props.background === 'true' ? 'card-content white-text' : '')}>
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

export default MyRooms;