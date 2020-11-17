import React from "react";
import { Nav, Navbar } from "react-bootstrap"
import logo from "../../images/gigglecrewlogo.png"
import "./navigation.css"

function Navigation() {
  return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="300"
        height="100"
        className="d-inline-block align-top"
        alt="Giggle Crew Logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;