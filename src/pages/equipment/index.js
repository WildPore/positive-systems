import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/layout";
import ProductDisplay from "../../components/equipment/ProductDisplay";

import * as equipmentStyle from "./index.module.scss";

import image1 from "../../../images/placeholder1-400x300.jpg";

const Equipment = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Our Inventory</h1>
      <ProductDisplay src={image1} />
      <Container className={equipmentStyle.productDisplay}>
        <Row>
          <Col></Col>
          <Col>
            <div className={equipmentStyle.productDisplay__descriptionText}>
              <h2>Absen Polaris 3.9 Pro</h2>
              <p>
                Add you viewing ten equally believe put. Separate families my on
                drawings do oh offended strictly elegance. Perceive jointure be
                mistress by jennings properly. An admiration at he discovered
              </p>
            </div>
            <Button className={equipmentStyle.productDisplay__button}>
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col>
          <StaticImage src="https://picsum.photos/500/350" />
        </Col>
        <Col>
          <h2>Absen AT5</h2>
          <p>
            Add you viewing ten equally believe put. Separate families my on
            drawings do oh offended strictly elegance. Perceive jointure be
            mistress by jennings properly. An admiration at he discovered
            difficulty continuing. We in building removing possible suitable
            friendly on. Nay middleton him admitting consulted and behaviour son
            household. Recurred advanced he oh together entrance speedily
            suitable. Ready tried gay state fat could boy its among shall.
          </p>
        </Col>
      </Container>
      <Container>
        <h2>Scaling and Processing</h2>
        <p>I'm probably going to want to use an accordion for this?</p>
      </Container>
    </Layout>
  );
};

export default Equipment;
