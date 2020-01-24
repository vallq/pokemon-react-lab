import React from "react";
import { NavLink } from "react-router-dom";
import path from "../constants/path";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <header>
        <NavLink to={path.home}>
          <img
            alt="pokemon logo"
            src={`${process.env.PUBLIC_URL}/img/pokemon-logo.png`}
          />
        </NavLink>
        <NavLink to={path.about}>about</NavLink>
        <NavLink to={path.gallery}>gallery</NavLink>
      </header>
    </div>
  );
};

export default Header;
