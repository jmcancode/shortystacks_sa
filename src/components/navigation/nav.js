import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            🥞{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#!"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
