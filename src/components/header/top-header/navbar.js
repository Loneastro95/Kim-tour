import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import kimImg from '../../../images/kimberly.jpg';
import './Navcontainer.css'; // Ensure you have this CSS file
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const Navcontainer = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    phoneNumber: '',
    businessType:"" ,
    successMessage: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [id]: value
    }));
  };

  const handleUserServe = (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Email: ", user.email);
    console.log("Password: ", user.password);

    axios.post("http://localhost:3000/api/login", {
      emailAddress: user.email,
      password: user.password
    })
      .then(function (response) {
        if (response.status === 200) {
          toast.success("Login Successful"); // Show success toast
          setUser(prevUser => ({
            ...prevUser,
            successMessage: "Login Successful"
          }));
        } else {
          toast.error(response.data.error || "Login failed"); // Show specific error toast
        }
      })
      .catch(function (error) {
        toast.error(error.response?.data?.error || "An error occurred"); // Show specific error toast
        console.log(error);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Validate passwords match
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    axios.post("http://localhost:3000/api/register", {
      emailAddress: user.email,
      password: user.password,
      userName: user.userName,
      phoneNumber:user.phoneNumber ,
      confirmPassword:user.confirmPassword,
      businessType: user.businessType
    })
      .then(response => {
        if (response.status === 201) {
          toast.success("Registration Successful");
          setUser(prevUser => ({
            ...prevUser,
            successMessage: "Registration Successful"
          }));
        } else {
          toast.error(response.data.error || "Registration failed");
        }
      })
      .catch(error => {
        toast.error(error.response?.data?.error || "An error occurred");
        console.log(error);
      });
  };
  

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const toggleModal = () => setIsLogin(!isLogin);
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    handleClose();
  };
  const handleCloseForgotPassword = () => setShowForgotPassword(false);

  const handleUserTypeChange = (event) => {
    setUser(prevUser => ({
      ...prevUser,
      userType: event.target.value
    }));
  };


  const handleLogoClick = (()=>{
   
    navigate(`/`);
  })

  return (
    <>
      <Navbar expand="lg" className="navbar-airbnb mb-4">
        <Container>
          <Navbar.Brand className="brand-name" style={{color: '#007bff', fontSize: '1.5rem'}}  onClick={handleLogoClick}>
            
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
            <>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter email" value={user.email} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Password" value={user.password} onChange={handleChange} />
              </div>

              <Button variant="primary" className="w-100 mt-3" onClick={handleUserServe}>
                Login
              </Button>

              <div className="text-center mt-3">
                <Button variant="link" onClick={() => setIsLogin(false)}>Register</Button>
                <Button variant="link" className="ms-3" onClick={handleForgotPassword}>Forgot Password?</Button>
              </div>
            </>
          ) : (
            <>
              {userType ? (
                <>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" />
                  </div>

                  {userType && (
                    <div className="mb-3">
                      <label htmlFor="userType" className="form-label">User Type</label>
                      <input type="text" id="userType" className="form-control" value={userType.charAt(0).toUpperCase() + userType.slice(1)} disabled />
                    </div>
                  )}

                  <Button variant="primary" className="w-100 mt-3" onClick={handleRegistration} >
                    Register
                  </Button>

                  <div className="text-center mt-3">
                    <Button variant="link" onClick={toggleModal}>Login</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" value={user.useremail} onChange={handleChange}  />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" value={user.password} onChange={handleChange} />
                  </div>

                  

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm-Password" value={user.confirmPassword} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Phone number</label>
                    <input type="text" id="phoneNumber" className="form-control" placeholder="Enter phone number" value={user.phoneNumber} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">User Type</label>
                    <select id="userType" className="form-control"  value={user.userType} onChange={handleUserTypeChange}>
                      <option value="">Select User Type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="event">Event</option>
                      <option value="accommodation">Accommodation</option>
                    </select>
                  </div>

                  <Button variant="primary" className="w-100 mt-3"  onClick={handleRegistration}>
                    Register
                  </Button>

                  <div className="text-center mt-3">
                    <Button variant="link" onClick={toggleModal}>Login</Button>
                  </div>
                </>
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
          <div className="mb-3">
            <label htmlFor="forgotPasswordEmail" className="form-label">Email address</label>
            <input type="email" id="forgotPasswordEmail" className="form-control" placeholder="Enter your email" />
          </div>
          <Button variant="primary" className="w-100 mt-3">
            Send Reset Link
          </Button>
        </Modal.Body>
      </Modal>

      {/* Toast Notifications */}
      <ToastContainer className="toast-container" />
    </>
  );
};

export default Navcontainer;
