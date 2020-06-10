import React from 'react'
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";
import './StayNear.css';
// LOGICA DE FIREBASE

const AddRoomPage = () => {
    const history = useHistory();

    const goProfile = () => {
        history.push("/profile");
    }

    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgVr5">
                <NavBar logoSize={""} current={"Host"} dark={"True"} />
                <div className="container">
                    <div className="row">
                        <div className="col s6">

                        </div>
                        <form className="col s6">
                            <div className="row">
                                <input type="text" placeholder="Room Name" id="room_name" className="validate" required/>
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Room Description" id="room_description" className="validate" required/>
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Room Price" id="room_price" className="validate" required/>
                            </div>
                            <form action="#">
                                <div className="file-field input-field">
                                    <div className="btn blue darken-2">
                                        <span>Picture</span>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path- validate" type="text"/>
                                    </div>
                                </div>
                            </form>
                            <button class="waves-effect waves-light blue darken-2 btn-large" type="submit" name="action"  onClick={goProfile}> Create my Room</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRoomPage;