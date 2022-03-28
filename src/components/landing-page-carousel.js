import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";

import * as carouselStyling from "./landing-page-carousel.module.scss";

const LandingPageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <Link to="/events/corporate">
          <StaticImage
            src="../images/carousel/radiostation.png"
            alt="Our video wall at an event for a local radio station."
            placeholder="blurred"
            layout="constrained"
            aspectRatio={16 / 9}
          />
          <Carousel.Caption className={carouselStyling.caption}>
            <h3>Corporate and Special Events</h3>
            <p>
              Need an LED video wall to accentuate your presentation or digital
              signage for your event? We can do that.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to="/events/concerts">
          <StaticImage
            src="../images/carousel/deadbeats.png"
            alt="A photo of a concert with a design featuring our video wall."
            placeholder="blurred"
            layout="constrained"
            aspectRatio={16 / 9}
          />
          <Carousel.Caption className={carouselStyling.caption}>
            <h3>Concerts, Festivals, and Tours</h3>
            <p>
              Our LED video wall is an excellent canvas for stunning visuals.
              Need to light up a concert hall or a nightclub? We can do that.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to="/events/production">
          <StaticImage
            src="../../images/moonlight_design.jpg"
            alt="A composite image of a design of a stage and the stage built at the show."
            placeholder="blurred"
            layout="constrained"
            aspectRatio={16 / 9}
          />
          <Carousel.Caption className={carouselStyling.caption}>
            <h3>Full Production Services</h3>
            <p>
              Don't know what you need? We can guide you through the rental
              process with designs and experienced LED video technicians.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPageCarousel;
