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
import KimImg from "../../images/mall.jpg";
import { Link } from "react-router-dom";
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
  faStore,
  faShieldAlt,
  faParking
} from "@fortawesome/free-solid-svg-icons";

const Malls = () => {
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

  return (
    <div>
      <NavBar />
      <Container>
        <h3>Come shop with us</h3>
        <img src={KimImg} className="event-img " />
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
            <FontAwesomeIcon icon={faStore} className="me-2" />
              <div className="rest-name">
                <h5>Northern Cape Mall</h5>
                <div className="d-flex">
                  <p className="mb-0 mr-2">5.0</p>
                  <p className="mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="user-img" />
              <p>
                Shop 1, Royalyard Park 1, 9 Jacobus Smit Ave, Royal Glen,
                Kimberley, 8301
              </p>
            </div>
            <div className="event-info-container mb-4">
              <div className="d-flex event-info ">
              <FontAwesomeIcon icon={faParking} />
                <div>
                  <h6>R150 and under</h6>
                </div>
              </div>
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faShieldAlt} />
                <div>
                  <h6>Your safety is our priority. All our products meet the highest safety standards.</h6>
                  
                </div>
              </div>
              <div className="d-flex event-info">
              <FontAwesomeIcon icon={faClock} />
                <div>
                  <h6>08:00 till 18:00</h6>
                </div>
              </div>
            </div>
            <p className="event-content">
              Experience the vibrant flavors of Korea at our restaurant, where
              traditional dishes meet modern dining. From sizzling BBQ to savory
              stews, our menu offers a diverse range of authentic Korean cuisine
              prepared with fresh ingredients. Enjoy a warm, inviting atmosphere
              perfect for both casual dining and special occasions. Book your
              table today and immerse yourself in the rich culinary heritage of
              Korea.
            </p>
          </Col>
          <Col md={6} className="event-card">
            <div className="checkout-container mb-6 p-3 bg-light shadow-sm rounded">
              <h4 className="date-for-price">Come Dine with us</h4>
              <Form className="w-100">
                <InputGroup className="checkin-out mb-3 ">
                  <DatePicker
                    selected={checkInDate}
                    onChange={handleDateChange}
                    className="form-control"
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
                <Link to="/confirm">
                  <Button className="showbtn" variant="outline-dark">
                    Reserve
                  </Button>
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Malls;
