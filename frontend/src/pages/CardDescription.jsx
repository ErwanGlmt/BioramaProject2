import React from 'react';

const CardDescription = ({adressesOperateurs, categories, productions, gerant, raisonSociale})=> {

    return (
        <div className="div-card">
            <div>
                <img src =" " alt = "image acteur" />
            </div>
            <div>
                <h2>{raisonSociale}</h2>
                <p>{categories[0].nom}</p>
                {
                    productions.map(produit => {
                        <p>{produit}</p>
                    })
                }
                <p>{gerant}</p>
                <address>
                    {adressesOperateurs[0].lieu }<br />
                    {adressesOperateurs[0].codePostal } - {adressesOperateurs[0].ville }<br /> 
                </address>
            </div>
        </div>
    );
}

export default CardDescription;