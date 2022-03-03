import React from "react";

import Carousel from "react-bootstrap/Carousel";

const LandingCarouselItem = (props) => {
  return (
    <>
      <img
        className="d-block w-100"
        src="https://picsum.photos/1000/500"
        alt="Slide alt text"
      />
      <Carousel.Caption>
        <h3>{props.header}</h3>
        <p>captionText</p>
      </Carousel.Caption>
    </>
  );
};

export default LandingCarouselItem;
