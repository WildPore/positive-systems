import * as React from "react";

import "normalize.css";
import * as Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>Positive Systems (c) 2021</p>
    </footer>
  );
};

export default Footer;
