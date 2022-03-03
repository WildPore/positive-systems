import * as React from "react";
import { Link } from "gatsby";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import ContactModal from "./contactmodal.js";

import * as headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <Navbar className={headerStyles.navbar} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className={headerStyles.link} to="/">
            Positive Systems
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Equipment" id="equipment-nav-dropdown">
              <Link to="/equipment/polaris" className={headerStyles.link}>
                <NavDropdown.Item as="span">Absen PL3.9</NavDropdown.Item>
              </Link>
              <Link to="/equipment/at5" className={headerStyles.link}>
                <NavDropdown.Item as="span">Absen AT5</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Our Work" id="events-nav-dropdown">
              <Link to="/portfolio" as={headerStyles.link}>
                <NavDropdown.Item as="span">Freaky Deaky</NavDropdown.Item>
              </Link>
              <Link to="/portfolio" as={headerStyles.link}>
                <NavDropdown.Item as="span">Boo!</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          <div className="d-grid gap-2">
            <ContactModal />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
