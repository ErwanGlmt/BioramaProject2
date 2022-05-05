import React from "react";
import "../styles/CardHome.css";
import PropTypes from "prop-types";

function CardHome({
  lieu,
  ville,
  codePostal,
  categories,
  raisonSociale,
  dateArret,
}) {
  return (
    <div className="cardHomeContainer">
      <div className="cardHome">
        <div className="cardHome-image">
          <img src="./src/assets/jake.jpg" alt="acteur" />
        </div>
        <div>
          <h2>
            {raisonSociale} - {dateArret}
          </h2>
          <p>{categories}</p>
          <address>
            {lieu}
            <br />
            {codePostal} - {ville}
            <br />
          </address>
        </div>
      </div>
    </div>
  );
}

CardHome.propTypes = {
  lieu: PropTypes.string,
  codePostal: PropTypes.string,
  ville: PropTypes.string,
  categories: PropTypes.string,
  raisonSociale: PropTypes.string,
  dateArret: PropTypes.string,
};

CardHome.defaultProps = {
  lieu: "",
  ville: "",
  codePostal: "",
  categories: "NoCategorie",
  raisonSociale: "NoRaisonSociale",
  dateArret: "",
};

export default CardHome;
