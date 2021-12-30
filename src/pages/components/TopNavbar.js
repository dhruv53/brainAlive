import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../image/brainalive.png";
import "./css/nav.css";
import { Link } from "react-router-dom";
function TopNavbar() {
  return (
    <Navbar expand="lg" className="NavBarColor" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="mr">
              <span className="txt">Home</span>
            </Link>
            <NavDropdown title="Company" id="basic-nav-dropdown" className="mr">
              <NavDropdown.Item>
                <Link to="/about" className="lnk">
                  <span className="txt">About</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/career" className="lnk">
                  <span className="txt">Career</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/contact" className="lnk">
                  <span className="txt">Contact</span>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/science" className="mr">
              <span className="txt">Science</span>
            </Link>
            <Link to="/product" className="mr">
              <span className="txt">Product</span>
            </Link>
            <Link className="mr">
              <span className="txt">Blog</span>
            </Link>
          </Nav>
          <Link to="/contact">
            <button className="webColor round whitetxt">
              <b>Schedule a Free Consultation</b>
            </button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
