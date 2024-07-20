import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import kimImg from '../../../images/kimberly.jpg';


const Navcontainer = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
    <Container className='bg-primary'>
      <Navbar.Brand className='text-light font-weight-bolder' href="#home">NC Tourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto d-flex flex-wrap">
        <Button variant="outline-danger">Emergency No.</Button>{' '}
          <NavDropdown title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src={kimImg} 
                            alt="user pic"
                        />

                        {/* {user.username} */}
                    </div>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Register
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              About Us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navcontainer