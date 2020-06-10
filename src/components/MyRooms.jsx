import React, { useState, useEffect } from "react";
import PlaceCard from './PlaceCard';
import './StayNear.css';

import myFirebaseInstance from "../firebase/myfirebase";

const MyRooms = (props) => {
    const [rooms, setRooms] = useState(null)

    const myFirebase = myFirebaseInstance.getInstance();

    useEffect(() => {
        myFirebase.database().ref("users").child(localStorage.getItem('userid')).child('rooms').once('value',
            (snapshot) => {
                let newRooms = []
                snapshot.forEach((room) => {
                    newRooms.push(room.val());
                });
                setRooms(newRooms)
            })
    }, []);

    return (
        <div className={(props.background === 'true' ? 'card blue-grey darken-1' : '')}>
            <div className={(props.background === 'true' ? 'card-content white-text' : '')}>
                <div className="row">
                    {
                        rooms &&
                        rooms.length > 0 &&
                        rooms.map((room) => {
                            return (
                                <PlaceCard rowSize={props.rowSize} title={room.name} description={room.description} price={room.price} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MyRooms;