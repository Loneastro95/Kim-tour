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
import kimImg from "../../images/mall.jpg";
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

  
  const lat = -28.7163;  // Example latitude for Northern Cape Mall
  const lng = 24.7554;   // Example longitude for Northern Cape Mall

  const handleButtonClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/46a3RT8xDb4zzR9Z7`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h3>Come shop with us</h3>
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
                  <h6>
                    Your safety is our priority. All our products meet the
                    highest safety standards.
                  </h6>
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
              North Cape Mall is an established Kimberley landmark, well
              supported and anchored in the community. It is located along the
              N12 – Memorial Street, with easy access and ample free parking. It
              includes established and well supported national anchors such as
              Pick ‘n pay, Woolworths Food, Game, Sportsman’s Warehouse and
              Dis-Chem. The centre boasts a significant entertainment offering
              with a Ster Kinekor showcasing the latest block busters and
              Fantasia games arcade creating hours of family fun.
            </p>
          </Col>
          <Col md={6} className="event-card">
            <div className="checkout-container  mb-6 p-3 bg-light shadow-sm rounded w-50">
              <h4 className="date-for-price text-center">Get directions </h4>
              <Form className="w-100">
                
                  <Button className="showbtn" variant="outline-dark"  onClick={handleButtonClick}>
                    GO to mall
                  </Button>
            
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Malls;
