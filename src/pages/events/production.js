import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/layout";

import * as eventStyle from "./events.module.scss";

const Production = () => {
  return (
    <Layout>
      <Container>
        <h2 className={eventStyle.heading}>Production Management</h2>
        <Row className={eventStyle.row}>
          <Col className="text-center">
            <StaticImage
              className="rounded"
              src="../../../images/moonlight_design.jpg"
              alt="A composite image of a design's stage plot, and the stage that was built from said design."
            />
          </Col>
          <Col lg>
            <p>
              Positive Systems strives to create unique and compelling designs
              to take your concert, presentation, or event to the next level. We
              believe in immersing your audience and engaging your community
              with unforgettable experiences. Our team of experts have a wealth
              of experience in the full production process and can take your
              show from concept to the stage. Whether you're looking to create
              an unforgettable event or simply improve the quality of your
              production, Positive Systems is here to help.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Production;
