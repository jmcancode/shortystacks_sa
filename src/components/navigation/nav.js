import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/IMG_6300.webp";

export default function TopNav() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: "45px" }}>
            <img
              src={logo}
              alt="logo"
              width={100}
              height={100}
              style={{ height: "180px", width: "150px" }}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" style={{ fontSize: "5px" }}>
              <Nav.Link href="#!"></Nav.Link>
            </Nav>
            {/* <Nav style={{ fontSize: "12px" }}>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
