import React from 'react';
// react ui libs
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// react-icons
import {AiOutlineHome} from "react-icons/ai"
import {CgMenuCake} from 'react-icons/cg'
import {FaHatCowboy} from 'react-icons/fa'
 // custom css
import "./navigation.css"
// logo
import logo from '../../assets/IMG_6300.webp'

const tabs = [{
  route: "/",
  icon: AiOutlineHome,
  label: "Home"
},{
  route: "/menu",
  icon: CgMenuCake,
  label: "Menu"
},{
  route: "/about",
  icon: FaHatCowboy,
  label: "About"
}]

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" style={{width: 60, height: 60}}/>
            </a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/menu" className="nav-link">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;
