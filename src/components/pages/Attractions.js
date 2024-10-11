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
import kimImg from "../../images/big-hole.jpg";

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
  faCertificate,
  faDollarSign,
  faStore,
  faShieldAlt,
  faParking,
  faArrowTurnRight,
  faMoneyBill,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const Attractions = () => {

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

  // const DirectionsButton = ({ item }) => {
  //   const handleButtonClick = () => {
  //     const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.location)}`;
  //     window.open(googleMapsUrl, '_blank');
  //   };

  const handleButtonClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.location)}`;
    window.open(googleMapsUrl, '_blank');
  };
  const handlebackbtn = () => {
    navigate('/eventCard')
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h3 className="w-100"><FontAwesomeIcon onClick={handlebackbtn} icon={faArrowLeft} className="me-2 arrow" />{item.name}</h3>
        <Row className="imgContainer mb-4">
          <Col md={8}>
            <img className="img-fluid big" src={item.gallery[0]} alt="Big view" />
          </Col>
          <Col md={4} className="smallContainer d-flex flex-column justify-content-between">
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={item.gallery[1] || kimImg} alt="Small view 1" />
              <img className="img-fluid small" src={item.gallery[2] || kimImg} alt="Small view 2" />
            </div>
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={item.gallery[3] || kimImg} alt="Small view 3" />
              <img className="img-fluid small" src={item.gallery[4] || kimImg} alt="Small view 4" />
            </div>
          </Col>
        </Row>
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faStore} className="me-2" />
              <div className="rest-name">
                <h5>Learn about the Big Hole</h5>
                <div className="d-flex">
                  <p className="mb-0 mr-2">5.0</p>
                  <p className="mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="user-img" />
              <p>{item.location}</p>
            </div>
            <div className="event-info-container mb-4">
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faMoneyBill} />
                <div>
                  <h6>Adults - R100</h6>
                  <h6>Children - R60 (4 to 12 Years)</h6>
                </div>
              </div>
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faShieldAlt} />
                <div>
                  <h6>
                    Your safety is our priority. All our products meet the
                    highest safety standards.
                  </h6>
                </div>
              </div>
              <div className="d-flex event-info">
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <h6>09:00 till 16:00</h6>
                </div>
              </div>
            </div>
            <p className="event-content">
              {item.description}
            </p>
          </Col>
          <Col md={6} xs={12} className="event-card checkout">
            <div className="checkout-container mb-6 p-3 bg-light shadow-sm rounded w-100">
              <h4 className="date-for-price text-center">Get directions</h4>
              <Form className="w-100">
                <Button className="showbtn" variant="outline-dark" onClick={handleButtonClick}>
                  Directions
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Attractions;
