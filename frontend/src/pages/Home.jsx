import React from "react";
import Slider from "../components/Slider";
import CardHome from "../components/CardHome";
import LabelSearch from "../components/LabelSearch";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="homePage">
        <h1>BIORAMA</h1>
        <h2>Engagés et labellisés bio</h2>
        <p>
          Nos acteurs ayant obtenus récemment leur label de l&apos;Agence du bio
          :
        </p>
      </div>
      <CardHome />
      <LabelSearch />
    </div>
  );
}
