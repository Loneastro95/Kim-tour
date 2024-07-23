import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import explore1 from "../../images/explore3.png";
import explore2 from "../../images/kimberly.jpg";
import explore5 from "../../images/explore5.jpg";
import "./explore.css";
const Explore = () => {
  return (
    <div className="explore-container mt-5">
      <h3 className="explore-header text-center">Explore Kimberley</h3>
      <p className="text-center">
        Discover the historic charm and local delights. Kimberley awaits!
      </p>
      <Carousel className="carousel-container">
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={explore1} alt="Image One" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="explore-header">Discover Kimberley, South Africa</h3>
            <p className="explore-text">
              Welcome to Kimberley, the heart of the Northern Cape! Explore the
              famous Big Hole, discover diamond mining stories, and stroll
              through historic Victorian streets. Enjoy a unique blend of
              adventure and history.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={explore2} alt="Image Two" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="explore-header">Explore Kimberley's Rich Culture</h3>
            <p className="explore-text">
              Discover diamond mining history at the Kimberley Mine Museum and
              enjoy local art galleries. Savor regional cuisine and warm
              hospitality. Kimberley blends history, culture, and adventure.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={explore5} alt="Image Two" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="explore-header">Experience Kimberley</h3>
            <p className="explore-text">
              Savor local cuisine, dive into the vibrant art scene, and feel the
              warmth of the community. Whether you're a history buff, nature
              lover, or adventurer, Kimberley promises an unforgettable journey.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Explore;
