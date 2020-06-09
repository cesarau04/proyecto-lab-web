import React from 'react';
import ReactDOM from 'react-dom';
import './StayNear.css';

const LoginForm = () => {
    return ( 
        <div className="bgCr1 right-medium-sign right z-depth-3 waves-effect waves-light">
        <div className="row center">
            INICIAR SESIÓN
                </div>
        <div className="row">
            <div className="col s3"></div>
            <div className="col s12">
                <label htmlFor="aemail"><b>Correo electrónico</b></label>
            </div>
            <div className="col s12"></div>
        </div>
        <div className="row center">
            <div className="col s12"></div>
            <div className="col s12">
                <input id="input_email" type="text" name="aemail" className="validate" required />
            </div>
            <div className="col s3"></div>
        </div>

        <div className="row">
            <div className="col s12"></div>
            <div className="col s12">
                <label htmlFor="apassword"><b>Contraseña</b></label>
            </div>
            <div className="col s12"></div>
        </div>

        <div className="row center">
            <div className="col s12"></div>
            <div className="col s12">
                <input id="input_password" type="password" name="apassword" className="validate" required />
            </div>
            <div className="col s12"></div>
        </div>

        <div className="row center">
            <div className="col s12"></div>
            <div className="col s12">
                <button className="btn btn-block waves-effect waves-light" type="submit" >Iniciar sesión</button>
            </div>
            <div className="col s3"></div>
        </ div>
    </div>
    );
}
export default LoginForm;