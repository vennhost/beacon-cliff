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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleGetStarted = () => {
    window.location.href = "/getstarted";
  };

  return (
    <Navbar color="warning" light expand="md" className="sticky-top">
      <NavbarBrand style={{ position: "absolute" }} href="/">
        <img
          style={{
            position: "relative",
            display: "inline-block",
            paddingBottom: "30px",
          }}
          className="mr-auto"
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
            <NavLink href="/partners">Partners</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Services
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/relocation">Home / Coporate Relocation</Link>{" "}
              </DropdownItem>

              <DropdownItem>
                <Link to="/air">Air Freight</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/sea">Sea Freight</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/gallery">Gallery</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <Button onClick={handleGetStarted} color="primary">
            Get Started
          </Button>{" "}
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
