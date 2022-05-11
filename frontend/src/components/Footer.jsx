import React from "react";
import "../styles/Footer.css";
import biorama2 from "../assets/biorama2.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="div1">
        <div className="div-logo">
          <img src={biorama2} className="footer_logo" alt="" />
        </div>

        <div className="div-adresse">
          <h2>BIORAMA CORP.</h2> 564 rue Baron <br />
          44000 NANTES, FRANCE
          <br />
          <a href="tel:+33711223344">
            Cliquez ici pour appeler le 07 11 22 33 44
          </a>
        </div>

        <div className="div-reseaux">
          <p>SUIVEZ-NOUS :</p>

          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Icone Facebook"
          />
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt="Icone Instagram"
          />
          <img
            src="https://img.icons8.com/color/48/000000/youtube-play.png"
            alt="Icone YouTube"
          />
        </div>
      </div>

      <div className="row1">
        <p className="colSmall">
          &copy;{new Date().getFullYear()} BIORAMA CORP. | All rights reserved |
          Privacy policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
