import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header.js";
import Footer from "./footer.js";

import "normalize.css";
import * as Styles from "./layout.module.scss";

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
    <div className={Styles.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>
        <Header />
      </header>
      <h1 className={Styles.h1}>{pageTitle}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
