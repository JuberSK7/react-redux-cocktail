import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand px-4  d-flex align-items-center" to="/">
          <FaCocktail />
          <span className="px-2">Cocktail Website</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mx-4">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{color: '#fff'}}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productdetail/id" style={{color: '#fff'}}>
                Product Details
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
