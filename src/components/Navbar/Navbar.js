import { useState, useEffect } from "react";
import logo from "../../images/logo.gif";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            תורת חפץ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  הישוב
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  לתרומות
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  תשלומים
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  אודות
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* <img href="#" className="navbar-brand" src={logo} alt="Logo" />; */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;