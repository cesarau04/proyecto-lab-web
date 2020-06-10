import React, { useRef } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

import "./StayNear.css";

import myFirebaseInstance from "../firebase/myfirebase";

const AddRoomPage = () => {
  const history = useHistory();
  const roomNameRef = useRef(null);
  const roomDescRef = useRef(null);
  const roomPriceRef = useRef(null);
  const roomPicRef = useRef(null);

  const createRoom = () => {
    const myFirebase = myFirebaseInstance.getInstance();

    const nameVal = roomNameRef.current.value;
    const descriptionVal = roomDescRef.current.value;
    const priceVal = roomPriceRef.current.value;
    const pictureVal = "a link to pic";
    // const pictureVal = roomPicRef.current.value;

    // push to /rooms/
    myFirebase
      .database()
      .ref("rooms")
      .push({
        name: nameVal,
        description: descriptionVal,
        price: priceVal,
        picture: pictureVal, // TODO: Change this to file
        userid: localStorage.getItem("userid"),
      })
      .then((snapshot) => {
        console.log(snapshot.key);

        // push to /users/{id}/rooms/
        myFirebase
          .database()
          .ref("users")
          .child(localStorage.getItem("userid"))
          .child("rooms")
          .child(snapshot.key)
          .set({
            name: nameVal,
            description: descriptionVal,
            price: priceVal,
            picture: pictureVal, // TODO: Change this to file
          });
      });

    history.push("/profile");
  };

  return (
    <div className="container center">
      <div className="z-depth-3 center-sign bgVr5">
        <NavBar logoSize={""} current={"Host"} dark={"True"} />
        <div className="container">
          <div className="row">
            <div className="col s6"></div>
            <form className="col s6">
              <div className="row">
                <input
                  type="text"
                  placeholder="Room Name"
                  id="room_name"
                  className="validate"
                  ref={roomNameRef}
                  required
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  placeholder="Room Description"
                  id="room_description"
                  className="validate"
                  ref={roomDescRef}
                  required
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  placeholder="Room Price"
                  id="room_price"
                  className="validate"
                  ref={roomPriceRef}
                  required
                />
              </div>
              <form action="#">
                <div className="file-field input-field">
                  <div className="btn blue darken-2">
                    <span>Picture</span>
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path- validate"
                      type="text"
                      ref={roomPicRef}
                    />
                  </div>
                </div>
              </form>
              <button
                class="waves-effect waves-light blue darken-2 btn-large"
                type="submit"
                name="action"
                onClick={createRoom}
              >
                {" "}
                Create my Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoomPage;
