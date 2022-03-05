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
            <h2>We're not bad!</h2>
            <p>
              High quality events that make you go "alright". We have it all.
              Positive Systems has large panels, small panels, all in mostly
              working condition. We try our best to make sure that you remember
              us for good reasons!
            </p>
            <h2>Equipment Used:</h2>
            <ul>
              <li>Video wall</li>
              <li>Cables</li>
              <li>Love</li>
            </ul>
          </Col>
        </Row>
        <Row className={eventStyle.altRow}>
          <Col className="text-center" md lg={{ order: "last" }}>
            <StaticImage
              className="rounded"
              src="../../../images/large_design.jpg"
              alt="A complex design that we took from idea to reality. The design was our work and then we managed production to build the stage."
            />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: true, order: "first" }}>
            <p>Filler text for a second.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Production;
