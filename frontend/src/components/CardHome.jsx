import React from "react";
import "../styles/CardHome.css";
import PropTypes from "prop-types";
import jake from "../assets/jake.jpg";

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
          <img src={jake} alt="acteur" />
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
  lieu: "63 impasse de la fruitière",
  ville: "DOMANCY",
  codePostal: "74700",
  categories: "Producteur",
  raisonSociale: "La belle verte",
  dateArret: "2020-09-15",
};

export default CardHome;
