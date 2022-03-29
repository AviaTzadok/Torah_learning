import { useState, useEffect } from "react";
import "./Showcase.css";
const Showcase = () => {
  return (
    // <div>
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <img
            className="img-fluid w-20 d-none d-sm-block"
            src="images/Sefer_Torah.jpg"
            alt=""
          />
          <div>
            <h1>
              {" "}
              תורת השם <span className="text-warning">תמימה</span>
            </h1>
            <p className="lead my-4">כולל לימוד תורה</p>
            <button className="btn btn-primary btn-lg">צור קשר</button>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Showcase;
