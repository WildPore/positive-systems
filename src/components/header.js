import * as React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import ContactModal from "./contactmodal.js";

import "./style.scss";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Positive Systems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Products" id="products-nav-dropdown">
              <NavDropdown.Item href="#products/pl3.9">
                Absen PL3.9
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/at5">
                Absen AT5
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/8.9">
                VTEAM 8.9
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="events-nav-dropdown">
              <NavDropdown.Item href="#events/freaky-deaky">
                Freaky Deaky
              </NavDropdown.Item>
              <NavDropdown.Item href="#events/boo">Boo!</NavDropdown.Item>
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
