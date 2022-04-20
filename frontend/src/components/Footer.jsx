import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        <div className="col">
          <img
            src="./src/components/biorama2.png"
            className="footer_logo"
            alt=""
          />
        </div>

        <div className="col">
          <h4>BIORAMA CORP.</h4>
          <p>564 rue Baron</p>
          <p>44 000 NANTES, FRANCE</p>
          <p>+33 6.12.13.14.15</p>
        </div>

        <div className="col">
          <h4>SUIVEZ-NOUS SUR NOS RESEAUX</h4>

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
      <hr />
      <div className="row">
        <p className="col-small">
          &copy;{new Date().getFullYear()} BIORAMA CORP. | All rights reserved |
          Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
