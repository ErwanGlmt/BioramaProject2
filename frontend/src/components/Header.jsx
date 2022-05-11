import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../styles/Header.css";
import biorama2 from "../assets/biorama2.png";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "showNav" : null}`}>
        <div className="navbarLogo">
          <NavLink to="/">
            <img className="logo" src={biorama2} alt="logo" />
          </NavLink>
        </div>
        <ul className="navbarLinks">
          <li className="navbarItem slideInDown-1">
            <NavLink onClick={handleShowLinks} className="navbarLink" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-2">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Search"
            >
              Trouver un acteur
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-3">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Info"
            >
              Qui sommes-nous ?
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-4">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Contact"
            >
              Nous contacter
            </NavLink>
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
