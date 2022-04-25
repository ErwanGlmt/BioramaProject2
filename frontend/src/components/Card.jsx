import React from "react";
import "../styles/Search.css";
import PropTypes from "prop-types";

function Card({ adressesOperateurs, categories, raisonSociale }) {
  return (
    <div className="div-card">
      <div>
        <img src=" " alt="" />
      </div>
      <div>
        <h2>{raisonSociale}</h2>
        <p>{categories[0].nom} </p>
        <address>
          {adressesOperateurs[0].lieu}
          <br />
          {adressesOperateurs[0].codePostal} - {adressesOperateurs[0].ville}
          <br />
        </address>
      </div>
    </div>
  );
}

Card.defaultProps = {
  adressesOperateurs: "NoAddress",
  categories: "NoCategorie",
  raisonSociale: "NoRaisonSociale",
  codePostal: "NoCode",
  ville: "NoCity",
  lieu: "NoLieu",
  nom: "NoName",
};

Card.propTypes = {
  adressesOperateurs: PropTypes.string,
  categories: PropTypes.string,
  raisonSociale: PropTypes.string,
  codePostal: PropTypes.number,
  ville: PropTypes.string,
  lieu: PropTypes.string,
  nom: PropTypes.string,
};

export default Card;
