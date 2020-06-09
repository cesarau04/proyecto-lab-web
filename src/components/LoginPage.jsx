import React from 'react'

// LOGICA DE FIREBASE

const LoginPage = () => {
    return (
        <div className="container" style={{ backgroundColor: 'blue', height: '100vh'}}>
            <div className="container" style={{ backgroundColor: 'green', height: '100vh', width: '100wh' }}>
                <div className="row center">
                    INICIAR SESIÓN
                </div>

                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <label htmlFor="aemail"><b>Correo electrónico</b></label>
                    </div>
                    <div className="col s3"></div>
                </div>
                <div className="row center">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <input id="input_email" type="text" name="aemail" className="validate" required />
                    </div>
                    <div className="col s3"></div>
                </div>

                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <label htmlFor="apassword"><b>Contraseña</b></label>
                    </div>
                    <div className="col s3"></div>
                </div>

                <div className="row center">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <input id="input_password" type="password" name="apassword" className="validate" required />
                    </div>
                    <div className="col s3"></div>
                </div>

                <div className="row center">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <button className="btn btn-block waves-effect waves-light" type="submit" >Iniciar sesión</button>
                    </div>
                    <div className="col s3"></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;