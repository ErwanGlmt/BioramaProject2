import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";

function Card({ lieu, ville, codePostal, categories, raisonSociale }) {
  return (
    <div className="div-card">
      <div className="div-image">
        <img src="./src/assets/slide3.jpg" alt="distributeur" />
      </div>
      <div>
        <h2>{raisonSociale}</h2>
        <p>{categories}</p>
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
};

Card.defaultProps = {
  lieu: "",
  ville: "",
  codePostal: "",
  categories: "NoCategorie",
  raisonSociale: "NoRaisonSociale",
};

export default Card;
