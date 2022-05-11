import React from "react";
import "../styles/Slider.css";
import slide4 from "../assets/slide4.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";

function Slider() {
  return (
    <div className="slider">
      <figure>
        <img src={slide4} className="slide4" alt="" />
        <img src={slide1} className="slide1" alt="" />
        <img src={slide2} className="slide2" alt="" />
        <img src={slide4} className="slide4" alt="" />
        <img src={slide2} className="slide2" alt="" />
      </figure>
    </div>
  );
}

export default Slider;
