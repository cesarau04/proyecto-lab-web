import React from "react";
import PlaceCard from "./PlaceCard";
import "./StayNear.css";

const PlacesSuggestionPage = (props) => {
  return (
    <div
      className={props.background === "true" ? "card blue-grey darken-1" : ""}
    >
      <div
        className={props.background === "true" ? "card-content white-text" : ""}
      >
        {
          props.rooms &&
          props.rooms.map((room) => {
            return (
              <PlaceCard rowSize={props.rowSize} title={room.name} description={room.description} price={room.price} />
            );
          })
        }
      </div>
    </div>
  );
};

export default PlacesSuggestionPage;
