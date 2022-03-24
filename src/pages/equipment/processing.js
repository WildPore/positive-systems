import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

import { Container, Row, Col } from "react-bootstrap";

import * as productStyle from "./productStyle.module.scss";

const Processing = () => {
  return (
    <Layout>
      <Container fluid="lg">
        <Row className={productStyle.headingContainer}>
          <Col md={{ span: 12 }} lg={{ offset: 3, span: 6 }}>
            <h1 className={productStyle.heading}>
              Scaling and Processing Solutions
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md lg={{ offset: 1, span: 5 }}>
            <StaticImage
              className="rounded"
              src="https://picsum.photos/500/800"
              alt="Photo of an Absen Polaris 3.9 Pro panel"
            />
          </Col>
          <Col sm lg={{ span: 5 }}>
            <h2 className={productStyle.sectionHeading}>NovaStar</h2>
            <p>
              We are a NovaStar operation, with the capability of doing up to 4K
              and the ability to handle all sorts of complex, creative stage
              designs. We can take a simple HDMI line, and turn it into a
              stunning visual display, or we can work with you to provide
              solutions to your specific show. We provide industry standard
              processing and scaling hardware that will ensure your visuals are
              top notch. Whether you need a basic setup or something more
              complex, we have the skills and experience to make it happen.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Processing;
