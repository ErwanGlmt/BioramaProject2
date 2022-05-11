import React from "react";
import "../styles/Presentation.css";
import photoequipe from "../assets/photoequipe.jpg";

function Presentation() {
  return (
    <div className="presentation-text">
      <h1>Qui sommes-nous?</h1>
      <p id="prestextdesktop">
        Suivant une formation Développeur Web intensive de 5 mois au sein de la
        Wild Code School, notre équipe en est venue à collaborer au sein du
        Projet 2 de la formation. L&apos;objectif du projet était de créer un
        site dynamique avec React et d&apos;utiliser une API. Nous voulions que
        notre site ne soit pas seulement une application fonctionnelle mais
        qu&apos;elle apporte aussi du sens et de l&apos;utilité. C&apos;est
        pourquoi Biorama a été créée. Biorama permet de répertorier tous les
        acteurs du monde du bio en France et sert d&apos;index afin de connecter
        les professionnels du secteur entre eux ou tout simplement de permettre
        aux particuliers de s&apos;informer des acteurs proches de chez eux.
      </p>
      <p id="prestextmobile">
        Suivant une formation Développeur Web intensive de 5 mois au sein de la
        Wild Code School, notre équipe en est venue à collaborer au sein du
        Projet 2 de la formation. L&apos;objectif du projet était de créer un
        site dynamique avec React et d&apos;utiliser une API. Nous voulions que
        notre site ne soit pas seulement une application fonctionnelle mais
        qu&apos;elle apporte aussi du sens et de l&apos;utilité.
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
