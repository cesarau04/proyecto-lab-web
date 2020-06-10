import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PlacesSuggestionPage from "./PlacesSuggestionPage";
import SearchForm from "./SearchForm";
import "./StayNear.css";

import myFirebaseInstance from "../firebase/myfirebase";

const SearchPage = () => {
  const [rooms, setRooms] = useState(null)
  const [bkpRooms, setBkpRooms] = useState(null)
  const [bShouldDownlaod, setbShouldDownload] = useState(true)
  const myFirebase = myFirebaseInstance.getInstance();

  useEffect(() => {
    if (bShouldDownlaod) {
      myFirebase.database().ref("rooms").once('value',
        (snapshot) => {
          let newRooms = []
          snapshot.forEach((room) => {
            newRooms.push(room.val());
          });
          setRooms(newRooms)
          setBkpRooms(newRooms)
        });
      setbShouldDownload(false)
    }
  }, []);

  const filterRooms = (filters) => {
    console.log(rooms);
    
    let filteredRooms = bkpRooms.slice()

    const filterPrice = (room, _case) => {
      switch (_case) {
        case "<100":
          return Number(room.price) < 100 ? true : false;
        case "100-250":
          return (Number(room.price) >= 100) && (Number(room.price) <= 250) ? true : false;
        case ">250":
          return Number(room.price) > 250 ? true : false;
        default:
          return true;
      }
    }

    // filteredRooms = bkpRooms.filter(filterPrice(filters.price)
    filteredRooms = filteredRooms.filter(room => room.state === filters.state)
    filteredRooms = filteredRooms.filter(room => room.school === filters.school)

    console.log("FILTERED ROOMS");
    console.log(filteredRooms);
    
    setRooms(filteredRooms)
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
