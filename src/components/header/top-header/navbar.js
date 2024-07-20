import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle, faSignInAlt, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import kimImg from '../../../images/kimberly.jpg';
import './Navcontainer.css'; // Ensure you have this CSS file

const Navcontainer = () => {
  return (
    <Navbar expand="lg" className="navbar-airbnb">
      <Container>
        <Navbar.Brand className="brand-name" href="#home">
          KIM TOUR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <NavDropdown 
              title={
                <div className="user-card d-flex align-items-center">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                 
                </div>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#login">
                <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#register">
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="#contact">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcontainer;
