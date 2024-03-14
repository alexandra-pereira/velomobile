import React, { useEffect } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";

//le carousel passe images comme props, useEffect est un hook
// The useEffect hook takes a function and an array of dependencies. In this case, the array is empty ([]), which means the effect will only run once after the initial render.
// Inside the effect, you query the DOM for the carousel element using its ID (#carouselExampleIndicators)
// If the element exists, you create a new instance of BootstrapCarousel, passing the element and an options object with the interval property

const Carousel = ({ images }) => {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    if (carouselElement) {
      new BootstrapCarousel(carouselElement, {
        interval: 2500,
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={image.src} className="d-block" alt={image.alt} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
