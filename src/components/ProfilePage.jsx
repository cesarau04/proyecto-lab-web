import React from "react";
import NavBar from "./NavBar";
import MyRooms from "./MyRooms";
import "./StayNear.css";

// LOGICA DE FIREBASE

const ProfilePage = () => {
  return (
    <div className="container center">
      <div className="z-depth-3 center-sign bgWhite">
        <NavBar logoSize={""} current={"Profile"} dark={"True"} />
        <div className="container">
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
              <h4>Profile Info</h4>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Correo</span>
                  <p>{localStorage.getItem("useremail")}</p>
                </div>
              </div>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Historial</span>
                  <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                  <p>-Rentó cuarto a XXXX el dia xx/xx/xxxx</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <MyRooms background={"true"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
