import "./Slider.css";

import { useState, useEffect } from "react";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="images/synagogue/1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item " data-bs-interval="3000">
            <img src="images/synagogue/2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/synagogue/3.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/synagogue/4.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/synagogue/5.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/synagogue/6.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/synagogue/7.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
