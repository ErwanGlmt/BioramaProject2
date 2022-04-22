import React from "react";
import '../styles/Card.css';
import CardDescription from "../pages/CardDescription";

const dispayCard = ()=> {
    //console.log('ok');
}

const Card = ({adressesOperateurs, categories, raisonSociale, productions, gerant})=> {

    <CardDescription
        adressesOperateurs={adressesOperateurs} 
        categories={categories[0].nom}
        raisonSociale={raisonSociale}
        productions={productions}
        gerant={gerant}
    />

    return (
        <div className="div-card" onClick={dispayCard()}>
            <div>
                <img src =" " alt = "image acteur" />
            </div>
            <div>
                <h2>{raisonSociale}</h2>
                <p>{categories[0].nom}</p>
                <address>
                    {adressesOperateurs[0].lieu}<br />
                    {adressesOperateurs[0].codePostal} - {adressesOperateurs[0].ville}<br /> 
                </address>
            </div>
        </div>
    );
}

export default Card;