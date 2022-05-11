import React from "react";
import "../styles/Presentation.css";
import photoequipe from "../assets/photoequipe.jpg";

function Presentation() {
  return (
    <div className="presentation-text">
      <h1>Qui sommes-nous?</h1>
      <p id="prestextdesktop">
        Suivant une formation Développeur Web intensive de 5 mois au sein de la
        Wild Code School. Notre équipe en est venue à collaborer au sein du
        Projet 2 de la formation. Une création de site internet qui devait se
        faire sous React mais aussi avec l&apos;utilisation d&apos;une API
        publique. Nous voulions que notre site ne soit pas seulement une
        application fonctionnelle mais aussi une application qui apporte du sens
        et de l&apos;utilité. C&apos;est pourquoi Biorama à été créée. Biorama
        permet de répertorier tout les acteurs du monde du bio en France et sert
        d&apos;index afin de connecter les professionnels du secteurs entre eux
        ou tout simplement de permettre au particulier de s&apos;informer des
        acteurs proches de chez eux.
      </p>
      <p id="prestextmobile">
        Suivant une formation Développeur Web intensive de 5 mois au sein de la
        Wild Code School. Notre équipe en est venue à collaborer au sein du
        Projet 2 de la formation. Une création de site internet qui devait se
        faire sous React mais aussi avec l&apos;utilisation d&apos;une API
        publique. Nous voulions que notre site ne soit pas seulement une
        application fonctionnelle mais aussi une application qui apporte du sens
        et de l&apos;utilité.
      </p>
      <div className="photopresentation">
        <img src={photoequipe} className="photoequipe" alt="Notre team" />
        <div className="membreequipe">
          <p>Séverine</p>
          <p>Lamarre</p>
          <p>Kévin</p>
          <p>Erwan</p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
