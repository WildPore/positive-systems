import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/layout";

import * as eventStyle from "./events.module.scss";

const Corporate = () => {
  return (
    <Layout>
      <Container>
        <h2 className={eventStyle.heading}>Corporate and Special Events</h2>
        <Row className={eventStyle.row}>
          <Col className="text-center">
            <StaticImage
              className="rounded"
              src="../../../images/big_groundstack.jpg"
              alt="A large, groundstacked wall that we built for a fundraising event."
            />
          </Col>
          <Col lg>
            <h2>Childhood Diabetes Fundraiser</h2>
            <p></p>
            <h2>Equipment Used:</h2>
            <ul>
              <li>Absen PL3.9</li>
              <li>Groundstack Support System</li>
              <li>4K Video Processors</li>
            </ul>
          </Col>
        </Row>
        <Row className={eventStyle.altRow}>
          <Col className="text-center" md lg={{ order: "last" }}>
            <StaticImage
              className="rounded"
              src="../../../images/amazon_rings.jpg"
              alt="A mirror-ball with 2 rings 'orbiting' it with our MJ5 video curtain attached on the outside face."
            />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: true, order: "first" }}>
            <h2>Amazon Holiday Party</h2>
            <p>
              Using our special MJ5 video curtain, we were able to wrap it
              around circular truss to make this stunning and unique set-piece
              for Amazon's Winter Holiday Party. The MJ5 is extremely
              lightweight, allowing it to drap or be affixed to a truss with
              simple zipties.
            </p>
            <h2>Equipment Used:</h2>
            <ul>
              <li>
                MJ5 - a lightweight video curtain that is perfect for decor and
                ambiance
              </li>
              <li>
                Circular Truss - these were rigged so that they would "orbit"
                the mirror ball in the middle
              </li>
              <li>
                Zipties - it's really all that's needed to tie the MJ5 off to
                truss, it is that light
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Corporate;
