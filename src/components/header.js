import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import "normalize.css";
import * as Styles from "./header.module.scss";

const Header = () => {
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
    <header className={Styles.header}>
      <h1>
        <Link to="/" className={Styles.headerLink}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav className={Styles.navbar}>
        <ul>
          <Link to="/" className={Styles.navItemLink}>
            <li>Home</li>
          </Link>
          <Link to="/about" className={Styles.navItemLink}>
            <li>About</li>
          </Link>
          <Link to="/" className={Styles.navItemLink}>
            <li>Contact</li>
          </Link>
          <Link to="/" className={Styles.navItemLink}>
            <li>Products</li>
          </Link>
          <Link to="/" className={Styles.navItemLink}>
            <li>Shows</li>
          </Link>
        </ul>
      </nav>
      <div className={Styles.getQuote}>
        <h2>Get a quote!</h2>
      </div>
    </header>
  );
};

export default Header;
