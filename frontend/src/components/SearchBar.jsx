/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import "../styles/Search.css";
import axios from "axios";
import Card from "./Card";

function SearchBar() {
  const [categorie, setCategorie] = useState("");
  const [ville, setVille] = useState("");
  const [data, setData] = useState([]);

  const handleChangeCity = (event) => {
    setVille(event.target.value);
  };

  const handleChangeCat = (event) => {
    setCategorie(event.target.value);
  };

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
      <div className="container">
        <form>
          <div className="selectCat">
            <select
              name="categorie"
              id="categorie"
              required
              onChange={(e) => handleChangeCat(e)}
            >
              <option value="">-- Choisissez une catégorie --</option>
              <option value="Grossistes">Grossistes</option>
              <option value="Magasins spécialisés">Magasins Spécialisés</option>
              <option value="Grandes surfaces généralistes">
                Grandes surfaces généralistes
              </option>
              <option value="Artisans/commerçants">
                Artisans / commerçants
              </option>
            </select>
          </div>

          <input
            type="text"
            minLength="4"
            maxLength="16"
            required
            placeholder="Ville de la recherche"
            onChange={(e) => handleChangeCity(e)}
          />
          <input type="submit" value="Rechercher" />
        </form>
      </div>

      {data
        .filter((donnees) => {
          if (donnees.categories.length > 0) {
            if (categorie === "") return donnees.categories[0];
            if (ville !== "") {
              return donnees.adressesOperateurs[0].ville === ville;
            }
            return donnees.categories[0].nom === categorie;
          }
          return false;
        })
        .map((cat) => {
          return <Card {...cat} key={cat.id} />;
        })}
    </>
  );
}

export default SearchBar;
