import React, {Fragment} from 'react';
// custom css
import "./navigation.css"
// logo
import logo from '../../assets/IMG_6300.webp'
import {Outlet} from 'react-router-dom'
import {Navbar, Container, Nav} from "react-bootstrap"
import {AiFillShopping} from 'react-icons/ai'


const Navigation = (props) => {
    return (
        <Fragment>

            <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor: "#438b8e"}} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            
                            <Nav.Link href="#menu" >
                            <small className="bag">Menu</small>
                            </Nav.Link>
                            <Nav.Link>
                                <AiFillShopping size={20}/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
<div>
    <Outlet/>
</div>

        </Fragment>
    )
};

export default Navigation;
