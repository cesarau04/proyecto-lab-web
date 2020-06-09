import React from 'react';
import ReactDOM from 'react-dom';
import './StayNear.css';

const LoginForm = () => {
    return (
        <div className="bgCr1 right-medium-sign right z-depth-3 waves-effect waves-light">
            <div className="row center bold">
                Welcome
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Email" id="input_email" type="email" name="aemail" className="validate" required />
                    <label htmlFor="email"></label>
                </div>
            </div>


            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="password" id="input_password" type="password" name="apassword" className="validate" required/>
                </div>
            </div>

            

            <div className="row center">
                <div className="col s12">
                    <button className="bold btn waves-effect waves-light  btn-large blue " type="submit" >Take me home</button>
                </div>
            </ div>
        </div>
    );
}
export default LoginForm;