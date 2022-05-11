import "../styles/Card.css";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import slide3 from "../assets/slide3.jpg";

export default function CardDetail() {
  const [details, setDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://opendata.agencebio.org/api/gouv/operateurs/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json("KO");
      })
      .then((data) =>
        setDetails(data.items.find((el) => el.id === parseInt(id, 10)))
      );
  }, []);

  return (
    <>
      <div className="detailspace" />
      <div className="detailparent">
        <h1 className="titre-info-producteur">
          Informations détaillées du producteur :
        </h1>
        <div className="div-card-details div-card div-detail">
          <div className="div-image">
            <img src={slide3} alt="distributeur" />
          </div>
          <div>
            <h2>{details?.raisonSociale}</h2>
            {details?.categories.map((category) => (
              <h2 key={category.id}>{category.nom}</h2>
            ))}
            <address>
              {details?.lieu}
              <br />
              {details?.codePostal} - {details?.ville}
              <br />
            </address>
            <p>Gerant : {details?.gerant}</p>
            <p>Productions:</p>
            <ul>
              {details?.productions.map((produit) => (
                <li key={produit.id}>{produit.nom}</li>
              ))}
            </ul>
            <p>{details?.dateSuspension}</p>
          </div>
        </div>
        <Link to="/Search">
          <button id="returnbutton" type="button">
            Retour
          </button>
        </Link>
      </div>
    </>
  );
}
