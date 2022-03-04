import * as React from "react";
import { Link } from "gatsby";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import LandingPageCarousel from "../components/landing-page-carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import * as indexStyling from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
      <LandingPageCarousel></LandingPageCarousel>

      <Container className={indexStyling.underCarousel}>
        <p>
          Positive Systems is your local LED video wall provider in the Pacific
          Northwest! Based in Seattle, Washington, we bring top of the line
          equipment and experience to your events.
        </p>
      </Container>

      <Container fluid>
        <Row>
          <Col md>
            <Card className={indexStyling.card}>
              <Link to="/equipment/polaris">
                <Card.Img variant="top" src="https://picsum.photos/600/300" />
              </Link>
              <Card.Body>
                <Card.Title>Absen Polaris 3.9 Pro</Card.Title>
                <Card.Text>
                  Comfortable both indoors and outdoors with an IP65 rating. A
                  3.9mm pixel pitch means stunning clarity and color at close
                  ranges as well as at a distance.
                </Card.Text>
                <Link to="/equipment/polaris">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className={indexStyling.card}>
              <Link to="/equipment/at5">
                <Card.Img variant="top" src="https://picsum.photos/600/300" />
              </Link>
              <Card.Body>
                <Card.Title>Absen AT5 Pro</Card.Title>
                <Card.Text>
                  A versatile solution with detachable touring frames, allowing
                  for a lightweight indoor wall or a sturdy outdoor wall with an
                  IP65 rating.
                </Card.Text>
                <Link to="/equipment/at5">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className={indexStyling.card}>
              <Link to="/equipment/processing">
                <Card.Img variant="top" src="https://picsum.photos/600/300" />
              </Link>
              <Card.Body>
                <Card.Title>Processors and Scalers</Card.Title>
                <Card.Text>
                  A full suite of processing and scaling solutions to easily
                  serve your content on the big screen.
                </Card.Text>
                <Link to="/equipment/processing">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
