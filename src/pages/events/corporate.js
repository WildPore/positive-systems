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
            <h2>Unique and Special Events</h2>
            <p>
              An LED video wall is a powerful way to step up any event, whether
              it's a trade show, charity auction, or corporate presentation. At
              our company, we can work with you to put a video wall into your
              venue and get the maximum effect with the minimum stress on your
              part. We'll make sure that your video wall rental is set up and
              taken down quickly and efficiently, and that it looks great
              throughout your event.
            </p>
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
            <p>
              Video wall adds an extra element of fun and excitement to any
              event. Whether it's a large-scale backdrop or a small but dynamic
              detail, we're happy to work with you to design the most impactful
              look for your event.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Corporate;
