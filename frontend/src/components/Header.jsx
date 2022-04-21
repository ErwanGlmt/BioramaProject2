import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header>
      <nav className={`navbar ${showLinks ? "showNav" : null}`}>
        <div className="navbarLogo">
          <img className="logo" src="./src/assets/biorama2.png" alt="logo" />
        </div>
        <ul className="navbarLinks">
          <li className="navbarItem slideInDown-1">
            <Link onClick={handleShowLinks} className="navbarLink" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbarItem slideInDown-2">
            <Link onClick={handleShowLinks} className="navbarLink" to="/Search">
              Trouver un acteur
            </Link>
          </li>
          <li className="navbarItem slideInDown-3">
            <Link onClick={handleShowLinks} className="navbarLink" to="/Info">
              Qui sommes-nous?
            </Link>
          </li>
          <li className="navbarItem slideInDown-4">
            <Link
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Contact"
            >
              Nous contacter
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbarBurger"
          onClick={handleShowLinks}
        >
          <span className="burgerBar" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
