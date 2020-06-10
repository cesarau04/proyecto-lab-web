import React, { useState, useEffect } from 'react'
import PlaceCard from './PlaceCard';
import './StayNear.css';

import myFirebaseInstance from '../firebase/myfirebase'

const PlacesSuggestionPage = (props) => {
    const [readDB, setReadDB] = useState(true)
    const [rooms, setRooms] = useState({})
    const myFirebase = myFirebaseInstance.getInstance()

    useEffect(() => {
        if (readDB) {
            myFirebase.database().ref().child("rooms").once('value', 
            (snapshot) => {
                setRooms(snapshot.val())
            });
            setReadDB(false)
        }
    });

    return (
        <div className={(props.background === 'true' ? 'card blue-grey darken-1' : '')}>
            <div className={(props.background === 'true' ? 'card-content white-text' : '')}>
                {[rooms].map((child, key, arr) => {
                    console.log(child);
                    console.log(key);
                    console.log(arr);

                    console.log("======================");
                })}
                {/* <div className="row">
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                    <PlaceCard rowSize={props.rowSize} />
                </div> */}
            </div>
        </div>
    );
}

export default PlacesSuggestionPage;