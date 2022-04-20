import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : null}`}>
        <div className="navbar__logo">
          <img className="logo" src="./src/assets/biorama2.png" alt="logo" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__item slideInDown-1">
            <Link onClick={handleShowLinks} className="navbar__link" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbar__item slideInDown-2">
            <Link
              onClick={handleShowLinks}
              className="navbar__link"
              to="/Search"
            >
              Trouver un acteur
            </Link>
          </li>
          <li className="navbar__item slideInDown-3">
            <Link onClick={handleShowLinks} className="navbar__link" to="/Info">
              Qui sommes-nous?
            </Link>
          </li>
          <li className="navbar__item slideInDown-4">
            <Link
              onClick={handleShowLinks}
              className="navbar__link"
              to="/Contact"
            >
              Nous contacter
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbar__burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
