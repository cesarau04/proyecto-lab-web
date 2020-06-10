import React from "react";
//import ReactDOM from 'react-dom';
import "./StayNear.css";
import { useEffect } from "react";
import M from "materialize-css";

// LOGICA DE FIREBASE

const ParallaxImage = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
  }, []);

  return (
    <div>
      <div className="parallax-container z-depth-3">
        <div className="parallax">
          <img src="Img/stock-pictures/sT1.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
