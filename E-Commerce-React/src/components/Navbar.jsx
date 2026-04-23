import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ loggedUser }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">Savana</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
          </ul>

          <div className="d-flex">
            <i className="me-4">
              Welcome, {loggedUser?.userName || "Guest"}   
            </i>
        
            <span>   
              <FaShoppingCart />
              <sup className="badge bg-danger ms-2">0</sup>
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;