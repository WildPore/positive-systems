import * as React from "react";
import { Link } from "gatsby";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import ContactModal from "./contactmodal.js";

import * as headerStyles from "./header.module.scss";
import logoSVG from "../../images/ps_video_logo.svg";

const Header = () => {
  return (
    <Navbar className={headerStyles.navbar} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className={headerStyles.link} to="/">
            <img
              className={headerStyles.logo}
              src={logoSVG}
              alt="Positive Systems"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Our Equipment" id="equipment-nav-dropdown">
              <Link to="/equipment/polaris" className={headerStyles.link}>
                <NavDropdown.Item as="span">Absen PL3.9</NavDropdown.Item>
              </Link>
              <Link to="/equipment/at5" className={headerStyles.link}>
                <NavDropdown.Item as="span">Absen AT5</NavDropdown.Item>
              </Link>
              <Link to="/equipment/processing" className={headerStyles.link}>
                <NavDropdown.Item as="span">
                  Scaling and Processing Solutions
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="What We Do" id="events-nav-dropdown">
              <Link to="/events/corporate" className={headerStyles.link}>
                <NavDropdown.Item as="span">
                  Corporate and Special Events
                </NavDropdown.Item>
              </Link>
              <Link to="/events/concerts" className={headerStyles.link}>
                <NavDropdown.Item as="span">
                  Concerts, Festivals, and Tours
                </NavDropdown.Item>
              </Link>
              <Link to="/events/production" className={headerStyles.link}>
                <NavDropdown.Item as="span">
                  Full Production Services
                </NavDropdown.Item>
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
