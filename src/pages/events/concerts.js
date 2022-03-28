import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/layout";

import * as eventStyle from "./events.module.scss";

const Concerts = () => {
  return (
    <Layout>
      <Container>
        <h2 className={eventStyle.heading}>Concerts, Festivals, and Tours</h2>
        <Row className={eventStyle.row}>
          <Col className="text-center">
            <StaticImage
              className="rounded"
              src="../../../images/will_parks.jpg"
              alt="An EDM event photo."
            />
          </Col>
          <Col lg>
            <h2>Guaranteed Positive Experience</h2>
            <p>
              Positive Systems is experienced at providing large-scale video
              production solutions for musical events, concerts, and tours. With
              over 20 years of experience in this field, we are one of the
              leading video wall companies in the Pacific Northwest. From small
              events in intimate venues, to festivals with tens of thousands of
              attendees, Positive Systems has the experience, equipment and
              workforce for all types of shows. We will work with you to
              guarantee that your experience with us will be positive.
            </p>
          </Col>
        </Row>
        <Row className={eventStyle.row}>
          <Col className="text-center" md lg={{ order: "last" }}>
            <StaticImage
              className="rounded"
              src="../../../images/sasquatch_dance_tent.jpg"
              alt="A large, complex stage that we designed and then built."
            />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: true, order: "first" }}>
            <StaticImage
              className="rounded"
              src="../../../images/large_design.jpg"
              alt="A large, complex stage that we designed and then built."
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Concerts;
