import React, { useState } from "react";
import logo from "../../static-images/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import GetQuote from "../utilities/GetQuote";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleGetStarted = () => {
    window.location.href = "/getstarted";
  };

  return (
    <Navbar color="warning" light expand="md" className="sticky-top nav-bar">
      <NavbarBrand style={{ position: "absolute" }} href="/">
        <img
          style={{
            position: "relative",
            display: "inline-block",
            paddingBottom: "30px",
          }}
          className="mr-auto logo"
          src={logo}
          alt="logo"
          width="250px"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/relocation">Services</NavLink>
          </NavItem>
          <NavItem></NavItem>

          <NavItem>
            <NavLink href="/news-event">News & Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/career">Career</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/gallery">Gallery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact us</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          {/* <Button onClick={handleGetStarted} color="primary">
            Get Started
          </Button> */}
          <GetQuote />
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
