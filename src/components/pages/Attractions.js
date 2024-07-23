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
  faCertificate,
  faDollarSign,
  faStore,
  faShieldAlt,
  faParking,
  faArrowTurnRight,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";

const Attractions = () => {
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

  const handleButtonClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/qPHD7xAoqD4p9s9P9`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <NavBar />
      <Container>
      <h3>Learn about the Big Hole</h3>
        <Row className="imgContainer mb-4">
          <Col md={8}>
            <img className="img-fluid big" src={kimImg} alt="Big view" />
          </Col>
          <Col
            md={4}
            className="smallContainer d-flex flex-column justify-content-between"
          >
            <div className="smallImg d-flex">
              <img
                className="img-fluid small"
                src={kimImg}
                alt="Small view 1"
              />
              <img
                className="img-fluid small"
                src={kimImg}
                alt="Small view 2"
              />
            </div>
            <div className="smallImg d-flex">
              <img
                className="img-fluid small"
                src={kimImg}
                alt="Small view 3"
              />
              <img
                className="img-fluid small"
                src={kimImg}
                alt="Small view 4"
              />
            </div>
          </Col>
        </Row>
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faStore} className="me-2" />
              <div className="rest-name">
                <h5>The Big Hole Museum</h5>
                <div className="d-flex">
                  <p className="mb-0 mr-2">5.0</p>
                  <p className="mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="d-flex host-info mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="user-img" />
              <p>161, Tucker St, West End, Kimberley, 8301</p>
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
              Kimberley Big Hole History 150 years ago, the site of the Big Hole
              was a featureless, flat-topped hill. When word spread that
              diamonds had been discovered, thousands of prospectors, armed with
              nothing more than picks, shovels and hope, descended on Kimberley
              and created the largest hand-dug excavation in the world.
            </p>
          </Col>
          <Col md={6} className="event-card">
            <div className="checkout-container  mb-6 p-3 bg-light shadow-sm rounded w-50">
              <h4 className="date-for-price text-center">Get directions </h4>
              <Form className="w-100">
                
                  <Button className="showbtn" variant="outline-dark" onClick={handleButtonClick }>
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

export default Attractions;
