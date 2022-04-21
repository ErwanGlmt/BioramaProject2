import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

function Slider() {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/";
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "Titre du slider 1",
      text: `lorem ipsum`,
    },

    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: "Titre du slider 2",
      text: `lorem ipsum`,
    },

    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: "Titre du slider 3",
      text: `lorem ipsum`,
    },
  ];
  return (
    <Carousel>
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlayTitle">{slide.title}</h2>
            <p className="overlayText">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
