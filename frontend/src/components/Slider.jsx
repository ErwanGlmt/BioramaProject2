import React from "react";
import "../styles/Slider.css";

function Slider() {
  return (
    <div className="slider">
      <figure>
        <img src="./src/assets/slide4.png" className="slide4" alt="" />
        <img src="./src/assets/slide1.jpg" className="slide1" alt="" />
        <img src="./src/assets/slide2.jpg" className="slide2" alt="" />
        <img src="./src/assets/slide4.png" className="slide4" alt="" />
        <img src="./src/assets/slide2.jpg" className="slide2" alt="" />
      </figure>
    </div>
  );
}

export default Slider;
