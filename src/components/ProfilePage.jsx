import React from "react";
import NavBar from "./NavBar";
import MyRooms from "./MyRooms";
import { useHistory } from "react-router-dom";
import "./StayNear.css";

// LOGICA DE FIREBASE

const ProfilePage = () => {
  const history = useHistory();

  const goAddRoom = () => {
    history.push("/createroom");
  };

  return (
    <div className="container center">
      <div className="z-depth-3 center-sign bgWhite">
        <NavBar logoSize={""} current={"Profile"} dark={"True"} />
        <div className="container">
  <h4 className="DarkNav ">Welcome {localStorage.getItem("username")}</h4>
          <div className="row">
            <div className="col s4">
              <img
                className="img-medium waves-effect waves-light "
                src="Img/v11.png"
                alt=""
              />
              Profile Picture
            </div>
            <div className="col s8 waves-effect waves-light ">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    <h6 className="txtWhite">Email</h6>
                  </span>
                  <p>{localStorage.getItem("useremail")}</p>
                </div>
              </div>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    <h6 className="txtWhite">History</h6>
                  </span>
                  <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                  <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div className="row">
            <div className="col s12">
              <h4 className="DarkNav ">My Rooms</h4>
              <MyRooms background={"false"} />
              <button
                className="waves-effect waves-light blue darken-2 btn-large"
                type="submit"
                name="action"
                onClick={goAddRoom}
              >
                {" "}
                Add Room{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
