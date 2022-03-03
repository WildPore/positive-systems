import React from "react";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import LandingCarouselItem from "./LandingCarouselItem";

import * as landingCarouselStyle from "./LandingCarousel.module.scss";

const LandingCarousel = () => {
  return (
    <Carousel className={landingCarouselStyle.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1000/500"
          alt="Slide alt text"
        />
        <Carousel.Caption>
          <h3>header</h3>
          <p>captionText</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <LandingCarouselItem header={"Works?"} />
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingCarousel;
