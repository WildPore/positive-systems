import * as React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import ContactModal from "./contactmodal.js";

import "./style.scss";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">Positive Systems</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>

          <NavDropdown title="Equipment" id="equipment-nav-dropdown">
            <NavDropdown.Item href="/equipment">Absen PL3.9</NavDropdown.Item>
            <NavDropdown.Item href="/equipment">Absen AT5</NavDropdown.Item>
            <NavDropdown.Item href="/equipment">MJ4</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Events" id="events-nav-dropdown">
            <NavDropdown.Item href="/portfolio">Freaky Deaky</NavDropdown.Item>
            <NavDropdown.Item href="/portfolio">Boo!</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <div className="d-grid gap-2">
          <ContactModal />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
