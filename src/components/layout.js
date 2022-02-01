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
        <Row className="text-center">
          <h1>{pageTitle}</h1>
        </Row>
        <span></span>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
