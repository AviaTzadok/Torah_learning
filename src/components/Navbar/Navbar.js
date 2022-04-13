import { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src="images/logo.png" className="col-12 col-md-6 col-lg-3" />
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
                <a
                  href="https://avnehefetz.co.il/"
                  target="_blank"
                  className="nav-link"
                >
                  הישוב
                </a>
              </li>

              <li className="nav-item">
                <button
                  class="btn btn-link "
                  data-bs-toggle="modal"
                  data-bs-target="#donations"
                >
                  לתרומות
                </button>
              </li>

              <li className="nav-item">
                <button
                  class="btn btn-link "
                  data-bs-toggle="modal"
                  data-bs-target="#about"
                >
                  אודות{" "}
                </button>
                {/* <a href="#" className="nav-link">
                  אודות
                </a> */}
              </li>
              <li className="nav-item">
                <a href="#contact_us" className="nav-link">
                  צור&nbsp;קשר
                </a>
              </li>
            </ul>
          </div>

          {/* <img href="#" className="navbar-brand" src={logo} alt="Logo" />; */}
        </div>
      </nav>
      <div
        class="modal fade"
        id="about"
        tabindex="-1"
        aria-labelledby="aboutLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="aboutLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body col-12 col-md-12 col-lg-12">
              {" "}
              <img
                src="images/advertising1.png"
                class="modal-body col-12 col-md-12 col-lg-12"
              />
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="donations"
        tabindex="-1"
        aria-labelledby="donationsLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="donationsLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body col-12 col-md-12 col-lg-12 donations">
              {" "}
              רון דואני 0506977502
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
