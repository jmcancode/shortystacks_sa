import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/IMG_6300.webp";
import { ImInstagram, ImTwitter } from 'react-icons/im';


export default function TopNav() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        style={{
                        fontSize: "45px"
                    }}>
                        <img
                            src={logo}
                            alt="logo"
                            width={100}
                            height={100}
                            style={{
                            height: "80px",
                            width: "75px"
                        }}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="mx-auto"
                            style={{
                            fontSize: "5px"
                        }}>
                            <Nav.Link href="#!"></Nav.Link>
                        </Nav>
                        <Nav
                            style={{
                            fontSize: "12px",
                            display: "flex",
                            flexDirection: 'row',
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            
                        }}>
                            <Nav.Link as={Link} to="/menu">
                                Menu
                            </Nav.Link>
                            <li>
                                <a
                                    href="mailto:shortystacks.sa@gmail.com?subject=Shorty Stacks Catering Inquiry"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{
                                    color: "#777",
                                    textDecoration: "none",
                                    padding: "5px"
                                }}>
                                    Catering
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/shortystacks_sa/"
                                    rel="noopener noreferrer"
                                    target="__blank"
                                    style={{
                                    color: "#fc9596",
                                    textDecoration: "none",
                                    padding: "5px",
                                }}>
                                    <ImInstagram size={15}/>
                                </a>
                            </li>
                            <li>
                                <a
                                   href="https://twitter.com/shortystacks_sa?lang=en"
                                   rel="noopener noreferrer"
                                   target="__blank"
                                   style={{
                                   color: "#fc9596",
                                   textDecoration: "none",
                                   padding: "5px"
                               }}>
                                    <ImTwitter size={15}/>
                                </a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
