import React from "react";
import "../styles/Slider.css";

function Slider() {
  return (
    <div className="slider">
      <figure>
        <img src="./src/assets/slide1.jpg" className="slide1" alt="" />
        <img src="./src/assets/slide2.jpg" className="slide2" alt="" />
        <img src="./src/assets/slide1.jpg" className="slide1" alt="" />
        <img src="./src/assets/slide3.jpg" className="slide3" alt="" />
        <img src="./src/assets/slide1.jpg" className="slide1" alt="" />
      </figure>
    </div>
  );
}

export default Slider;
