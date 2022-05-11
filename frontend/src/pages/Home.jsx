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
        <div className="homeText">
          <h1>BIORAMA</h1>
          <h2>Engagés et labellisés bio</h2>
          <p>
            Retrouvez les acteurs bio proches de chez vous. Des professionnels
            agréés par le label européen AB. Grâce à Biorama, vous allez pouvoir
            effectuer des recherches spécifiques dans votre région !
          </p>
          <h2>
            Nos acteurs ayant obtenus récemment leur label de l&apos;Agence du
            bio :
          </h2>
        </div>
      </div>
      <CardHome />
      <LabelSearch />
    </div>
  );
}
