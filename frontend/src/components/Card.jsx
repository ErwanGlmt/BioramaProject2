import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";

function Card({ lieu, ville, codePostal, categories, raisonSociale }) {
  return (
    <div className="div-card">
      <div>
        <img src=" " alt="" />
      </div>
      <div>
        <h2>{raisonSociale}</h2>
        <p>{categories[0].nom} </p>
        <address>
          {lieu}
          <br />
          {codePostal} - {ville}
          <br />
        </address>
      </div>
    </div>
  );
}

Card.propTypes = {
  lieu: PropTypes.string,
  codePostal: PropTypes.string,
  ville: PropTypes.string,
  categories: PropTypes.string,
  raisonSociale: PropTypes.string,
  nom: PropTypes.string,
};

Card.defaultProps = {
  lieu: "",
  ville: "",
  codePostal: "",
  categories: "NoCategorie",
  raisonSociale: "NoRaisonSociale",
  nom: "NoName",
};

export default Card;
