import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import slide3 from "../assets/slide3.jpg";

function Card({
  lieu,
  ville,
  codePostal,
  categories,
  raisonSociale,
  productions,
  gerant,
  dateSuspension,
  cardId,
  setCardId,
}) {
  return !cardId ? (
    <div className="div-card-details div-card">
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
        <p>Gérant : {gerant}</p>
        <p>Productions:</p>
        <ul>
          {productions.map((produit) => (
            <li key={produit.id}>{produit.nom}</li>
          ))}
        </ul>
        <p>{dateSuspension}</p>
      </div>
    </div>
  ) : (
    <div className="div-card">
      <div className="div-image">
        <img src={slide3} alt="distributeur" />
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
        <Link to={`/Search/${cardId}`}>
          <button
            type="button"
            value={cardId}
            onClick={(e) => setCardId(Number(e.target.value))}
          >
            Plus de détails ...
          </button>
        </Link>
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
  productions: PropTypes.arrayOf(PropTypes.string),
  gerant: PropTypes.string,
  dateSuspension: PropTypes.string,
  cardId: PropTypes.number,
  setCardId: PropTypes.func,
};

Card.defaultProps = {
  lieu: "",
  ville: "",
  codePostal: "",
  categories: "Producteur",
  raisonSociale: "La belle verte",
  productions: [],
  gerant: "",
  dateSuspension: "",
  cardId: "",
  setCardId: "",
};

export default Card;
