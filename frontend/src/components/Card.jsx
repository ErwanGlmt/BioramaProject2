import react from "react";
import '../styles/Search.css';

const Card = ({adressesOperateurs, categories, raisonSociale})=> {
    console.log("donnee = " + categories[0].nom);
    return (
        <div className="div-card">
            <div>
                <img src =" " alt = "image acteur" />
            </div>
            <div>
                <h2>{raisonSociale}</h2>
                <p>{categories[0].nom}  </p>
                <address>
                    {adressesOperateurs[0].lieu }<br />
                    {adressesOperateurs[0].codePostal } - {adressesOperateurs[0].ville }<br /> 
                 </address>
            </div>
        </div>
    );
}

export default Card;