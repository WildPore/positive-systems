import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header.js";
import Footer from "./footer.js";

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
      <Header />
      <h1 className={Styles.heading}>{pageTitle}</h1>
      <main className={Styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
