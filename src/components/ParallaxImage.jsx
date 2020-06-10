import React from 'react'
//import ReactDOM from 'react-dom';
import './StayNear.css';
import { useEffect } from 'react';
import M from "materialize-css"

// LOGICA DE FIREBASE

const ParallaxImage = () => {
    useEffect(()=>{
        let elements = document.querySelectorAll(".parallax")
        M.Parallax.init(elements);
    },[]);

    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="Img/stock-pictures/sT1.jpg" />
                </div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="Img/stock-pictures/sT2.jpg" />
                </div>
            </div>
        </div>
    );
}

export default ParallaxImage;