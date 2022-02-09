import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";

import Header from "./header.js";

import "./style.scss";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Container>
        <Header />
        <Container fluid="sm" className="spacer"></Container>
        <Row className="text-center">
          <h1>{pageTitle}</h1>
        </Row>
        <Row className="justify-content-sm-center">
          <Col md={7}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
