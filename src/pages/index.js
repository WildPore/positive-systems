import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as indexStyling from "./index.module.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import LandingPageCarousel from "../components/landing-page-carousel";

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

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/600/300" />
              <Card.Body>
                <Card.Title>Absen Polaris 3.9 Pro</Card.Title>
                <Card.Text>
                  Comfortable both indoors and outdoors with an IP65 rating. A
                  3.9mm pixel pitch means stunning clarity and color at close
                  ranges as well as at a distance.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/600/300" />
              <Card.Body>
                <Card.Title>Absen AT5 Pro</Card.Title>
                <Card.Text>
                  A versatile solution with detachable touring frames, allowing
                  for a lightweight indoor wall or a sturdy outdoor wall with an
                  IP65 rating.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/600/300" />
              <Card.Body>
                <Card.Title>Processors and Scalers</Card.Title>
                <Card.Text>
                  A full suite of processing and scaling solutions to easily
                  serve your content on the big screen.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
