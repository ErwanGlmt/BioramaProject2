
import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";

import axios from 'axios';

const Search = ()=> {
  const [categorie, setCategorie] = useState("");
  const [ville, setVille] = useState("");
  const [data, setData] = useState([]);

  const getData = ()=> {
    axios
      .get('https://opendata.agencebio.org/api/gouv/operateurs/')
      .then(donnees => {
        setData(donnees.data.items);
        //console.log(data);
      })
  }
  
  useEffect(()=>{
    getData();
  }, [])

  console.log(data)

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar categorie={categorie} setCategorie={setCategorie} setVille={setVille} />
      {
        data.filter((donnees) => {
         if(donnees.categories.length > 0 ) {
           //&& donnees.categories[0].nom == categorie))) 
           //console.log(donnees.categories[0].nom);
           //console.log(categorie);
           return donnees.categories[0].nom === categorie;
          //donnees.categories.length > 0 && donnees.categories[0].nom == categorie))
         }
        })
        .map((cat, index) => <p key={index}>{cat.raisonSociale}</p>)
      }
    </div>
  );
}

export default Search;
