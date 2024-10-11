import React, { useState } from "react";
import {
  Container,
  Col,
  Form,
  Dropdown,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import kimImg from "../../images/restaurant.avif";
import { useLocation, useNavigate } from "react-router-dom";
import "./restaurant.css";
import NavBar from "../header/top-header/navbar";
import user from "../../images/icons8-user-24.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faPaw,
  faBriefcase,
  faClock,
  faLanguage,
  faMusic,
  faLock,
  faStar,
  faUtensils,
  faMapMarkerAlt,
  faCertificate ,
  faDollarSign,
  faMoneyBill,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const Restaurant = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // Retrieve the item from state

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);

  const handleAdults = () => setAdults(adults + 1);
  const handleAdultsSub = () => adults > 1 && setAdults(adults - 1);
  const handleChildren = () => setChildren(children + 1);
  const handleChildrenSub = () => children > 0 && setChildren(children - 1);
  const handleDateChange = (date) => {
    setCheckInDate(date);
  };

  const handlebackbtn = () =>{
    navigate('/restaurantsCard')
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h3 className="w-100"><FontAwesomeIcon onClick={handlebackbtn} icon={faArrowLeft} className="me-2 arrow"/>{item.name}</h3>
        <Row className="imgContainer mb-4">
          <Col md={8}>
            <img className="img-fluid big" src={item.gallery[0]} alt="Big view" />
          </Col>
          <Col md={4} className="smallContainer d-flex flex-column justify-content-between">
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={item.gallery[1]} alt="Small view 1" />
              <img className="img-fluid small" src={item.gallery[2]} alt="Small view 2" />
            </div>
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={item.gallery[3]} alt="Small view 3" />
              <img className="img-fluid small" src={item.gallery[4] || kimImg } alt="Small view 4" />
            </div>
          </Col>
        </Row>
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faUtensils} className="me-2" />
              <div className="rest-name">
                <h5>Experience the vibrant flavors of Korea</h5>
                <div className="d-flex">
                  <p className="mb-0 mr-2">5.0</p>
                  <p className="mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="user-img" />
              <p>
                {item.location}
              </p>
            </div>
            <div className="event-info-container mb-4">
              <div className="d-flex event-info ">
              <FontAwesomeIcon icon={faMoneyBill} />

                <div>
                  <h6>R150 and under</h6>
                </div>
              </div>
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faCertificate} />
                <div>
                  <h6>Rest assured, all our ingredients are fresh and handled with care to ensure your meal is safe and delicious.</h6>
                  
                </div>
              </div>
              <div className="d-flex event-info">
              <FontAwesomeIcon icon={faClock} />
                <div>
                  <h6>08:00 till 21:00</h6>
                </div>
              </div>
            </div>
            <p className="event-content">
              {item.description}
            </p>
          </Col>
          <Col md={6} className="event-card  checkin-out">
            <div className="checkout-container mb-6 p-3 bg-light shadow-sm rounded w-100 ">
              <h4 className="date-for-price">Come Dine with us</h4>
              <Form className="w-100">
                <InputGroup className="checkin-out mb-3 ">
                  <DatePicker
                    selected={checkInDate}
                    onChange={handleDateChange}
                    className="form-control w-100"
                    placeholderText="Check-In Date"
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                  />
                </InputGroup>
                <Dropdown className="guest-dropdown mb-3 w-100">
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    {totalGuest
                      ? `${totalGuest} Guest${totalGuest > 1 ? "s" : ""}`
                      : "Select Guests"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Form.Group className="dropdown-item d-flex justify-content-between align-items-center">
                      <Form.Label className="mb-0">Adults</Form.Label>
                      <div className="guest-count d-flex align-items-center">
                        <Button
                          className="guest-count-btn"
                          variant="outline-dark"
                          onClick={handleAdultsSub}
                        >
                          -
                        </Button>
                        <span className="guest-count-value mx-2">{adults}</span>
                        <Button
                          className="guest-count-btn "
                          variant="outline-dark"
                          onClick={handleAdults}
                        >
                          +
                        </Button>
                      </div>
                    </Form.Group>
                    <Form.Group className="dropdown-item d-flex justify-content-between align-items-center">
                      <Form.Label className="mb-0">Children</Form.Label>
                      <div className="guest-count d-flex align-items-center">
                        <Button
                          className="guest-count-btn"
                          variant="outline-dark"
                          onClick={handleChildrenSub}
                        >
                          -
                        </Button>
                        <span className="guest-count-value mx-2">
                          {children}
                        </span>
                        <Button
                          className="guest-count-btn"
                          variant="outline-dark"
                          onClick={handleChildren}
                        >
                          +
                        </Button>
                      </div>
                    </Form.Group>
                  </Dropdown.Menu>
                </Dropdown>
                
                  <Button className="showbtn" variant="outline-dark">
                    Reserve
                  </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
