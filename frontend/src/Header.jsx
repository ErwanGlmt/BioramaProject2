import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Search">Trouve des producteurs Bio Hot dans ta région</Link>
        <Link to="/Info">Qui sommes-nous?</Link>
        <Link to="/Contact">Nous contacter</Link>
      </nav>
    </header>
  );
}

export default Header;
