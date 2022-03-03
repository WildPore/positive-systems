import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";

import Header from "./header.js";

import * as layoutStyle from "./layout.module.scss";

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
      <Header />
      <Container className={layoutStyle.content}>{children}</Container>
    </>
  );
};

export default Layout;
