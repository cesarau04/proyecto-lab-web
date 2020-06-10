import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PlacesSuggestionPage from "./PlacesSuggestionPage";
import SearchForm from "./SearchForm";
import "./StayNear.css";

import myFirebaseInstance from "../firebase/myfirebase";

const SearchPage = () => {
  const [rooms, setRooms] = useState(null)

  const myFirebase = myFirebaseInstance.getInstance();

  useEffect(() => {
    // probably a bool to avoid re-dowload of records
    myFirebase.database().ref("rooms").once('value',
      (snapshot) => {
        let newRooms = []
        snapshot.forEach((room) => {
          newRooms.push(room.val());
        });
        setRooms(newRooms)
      });
  }, []);

  const filterRooms = (filters) => {
    for(var room in rooms) {
      
    }
  };

  return (
    <div className="container center">
      <div className="z-depth-3 center-sign bgWhite">
        <NavBar logoSize={""} current={"Search"} dark={"True"} />
        <div className="container">
          <h2 className="DarkNav ">Search</h2>
          <h5 className="DarkNav ">
            Book for 1-night & stay with students like you
          </h5> <br/> <br/>
          <div className="row">
            <div className="col s12 m4">
              <SearchForm callback={filterRooms}/>
            </div>
            <div className="col s12 m8">
              <PlacesSuggestionPage rowSize={"2"} background={""} rooms={rooms}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
