import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

import { useEffect } from "react";
import M from "materialize-css";

import "./StayNear.css";

import myFirebaseInstance from "../firebase/myfirebase";

const AddRoomPage = () => {
  const history = useHistory();
  const roomNameRef = useRef(null);
  const roomDescRef = useRef(null);
  const roomPriceRef = useRef(null);
  const roomPicRef = useRef(null);

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    let elements = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elements);
  }, []);

  useEffect(() => {
    let elements = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elements);
  }, []);

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
        <div className="">
          <div className="row">
            <div className="col s12 m6 center">
              <h3>Register a Room</h3>
            </div>
            <form className="col s12 m5">
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
              <div className="row">
                <div className="input-field col s12">
                  <select onChange={(e) => setSelectedState(e.target.value)}>
                    <option value="Jalisco" defaultValue>
                      Jalisco
                    </option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Monterrey">Monterrey</option>
                    <option value="Cd. de México">Cd. de México</option>
                  </select>
                  <label>State</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <select onChange={(e) => setSelectedSchool(e.target.value)}>
                    <option value="ITESM" defaultValue>
                      ITESM
                    </option>
                    <option value="ITESO">ITESO</option>
                    <option value="UNAM">UNAM</option>
                    <option value="UDG">UDG</option>
                    <option value="UAG">UAG</option>
                  </select>
                  <label>School</label>
                </div>
              </div>

              <form action="#">
                <div className="file-field input-field">
                  <div className="btn blue darken-2">
                    <span>Picture</span>
                    <input type="file" ref={roomPicRef}></input>
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </form>
              <button
                className="waves-effect waves-light blue darken-2 btn-large bold"
                type="submit"
                name="action"
                onClick={createRoom}
              >
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
