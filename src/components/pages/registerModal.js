import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle, faSignInAlt, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import kimImg from '../../../images/kimberly.jpg';
import './Navcontainer.css'; // Ensure you have this CSS file

const Navcontainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [userType, setUserType] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const toggleModal = () => setIsLogin(!isLogin);
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    handleClose();
  };
  const handleCloseForgotPassword = () => setShowForgotPassword(false);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-airbnb">
        <Container>
          <Navbar.Brand className="brand-name" href="#home">
            <img src={kimImg} alt="KIM TOUR" className="brand-logo" />
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
                <NavDropdown.Item onClick={handleShow}>
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  {isLogin ? 'Register' : 'Login'}
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

      {/* Login/Register Modal */}
      <Modal show={showModal} onHide={handleClose} centered dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-logo">
            <img src={kimImg} alt="KIM TOUR Logo" className="modal-logo-img" />
            <h4>KIM TOUR</h4>
            <p>Register or log in to access the best tours, events, and accommodations.</p>
          </div>
          {isLogin ? (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Login
              </Button>

              <div className="text-center mt-3">
                <Button variant="link" onClick={() => setIsLogin(false)}>Register</Button>
                <Button variant="link" className="ms-3" onClick={handleForgotPassword}>Forgot Password?</Button>
              </div>
            </Form>
          ) : (
            <>
              {userType ? (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  {userType && (
                    <Form.Group controlId="formBasicUserType">
                      <Form.Label>User Type</Form.Label>
                      <Form.Control as="select" disabled>
                        <option value={userType}>{userType.charAt(0).toUpperCase() + userType.slice(1)}</option>
                      </Form.Control>
                    </Form.Group>
                  )}

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Register
                  </Button>

                  <div className="text-center mt-3">
                    <Button variant="link" onClick={toggleModal}>Login</Button>
                  </div>
                </Form>
              ) : (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicUserType">
                    <Form.Label>User Type</Form.Label>
                    <Form.Control as="select" onChange={handleUserTypeChange}>
                      <option value="">Select User Type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="event">Event</option>
                      <option value="accommodation">Accommodation</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Register
                  </Button>

                  <div className="text-center mt-3">
                    <Button variant="link" onClick={toggleModal}>Login</Button>
                  </div>
                </Form>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Forgot Password Modal */}
      <Modal show={showForgotPassword} onHide={handleCloseForgotPassword} centered dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-logo">
            <img src={kimImg} alt="KIM TOUR Logo" className="modal-logo-img" />
            <h4>KIM TOUR</h4>
            <p>Enter your email address to receive a link to reset your password.</p>
          </div>
          <Form>
            <Form.Group controlId="formForgotPasswordEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Send Reset Link
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navcontainer;
