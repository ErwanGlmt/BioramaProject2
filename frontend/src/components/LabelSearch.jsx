import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import axios from "axios";
import CardHome from "./CardHome";

function LabelSearch() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://opendata.agencebio.org/api/gouv/operateurs/")
      .then((donnees) => {
        setData(donnees.data.items);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data
        .filter((donnees) => {
          if (donnees.categories.length > 0) {
            return donnees.certificats[0].dateArret;
          }
          return false;
        })
        .map((cat) => {
          return (
            <CardHome
              categories={cat.categories[0].nom}
              dateArret={cat.certificats[0].dateArret}
              raisonSociale={cat.raisonSociale}
              lieu={cat.adressesOperateurs[0].lieu}
              codePostal={cat.adressesOperateurs[0].codePostal}
              ville={cat.adressesOperateurs[0].ville}
              key={cat.id}
            />
          );
        })}
    </>
  );
}

export default LabelSearch;
