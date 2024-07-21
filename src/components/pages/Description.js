import React, { useState } from "react";
import { Container, Col, Form, Dropdown, Row, Button, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import kimImg from "../../images/kimberly.jpg";
import NavBar from "../header/top-header/navbar";
import "./description.css";
import user from "../../images/icons8-user-24.png";
import desk from "../../images/icons8-swimming-pool-50.png";
import metal from "../../images/icons8-achievement-48.png";
import dive from "../../images/icons8-swimming-pool-50.png";
import { Link } from 'react-router-dom';

const Description = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);

  const handleAdults = () => setAdults(adults + 1);
  const handleAdultsSub = () => adults > 1 && setAdults(adults - 1);
  const handleChildren = () => setChildren(children + 1);
  const handleChildrenSub = () => children > 0 && setChildren(children - 1);
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <div>
      <NavBar />
      <Container fluid className="mt-4">
        <h3>Sasi Bush Lodge Morning Luxury Safari Tent</h3>
        <Row className="imgContainer mb-4">
          <Col md={8}>
            <img className="img-fluid big" src={kimImg} alt="Big view" />
          </Col>
          <Col md={4} className="smallContainer d-flex flex-column justify-content-between">
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={kimImg} alt="Small view 1" />
              <img className="img-fluid small" src={kimImg} alt="Small view 2" />
            </div>
            <div className="smallImg d-flex">
              <img className="img-fluid small" src={kimImg} alt="Small view 3" />
              <img className="img-fluid small" src={kimImg} alt="Small view 4" />
            </div>
          </Col>
        </Row>
        <Row className="Info-container">
          <Col md={8} className="details-container">
            <h4 className="location-detail">Private room in tent in Bergville, Northern Drakensberg, South Africa</h4>
            <p className="num-rooms">2 guests - 1 bedroom - 1 bed - 1.5 baths</p>
            <div className="rating-container mb-4 p-3 bg-light shadow-sm rounded">
              <div className="guest-fav">
                <h5 className="fav">Guest favorite</h5>
              </div>
              <div className="guest-view d-flex flex-column justify-content-center align-items-center">
                <p className="guest-view-text">One of the most loved homes on Airbnb, according to guest</p>
                <div className="rating d-flex align-items-center">
                  <p className="mb-0 mr-2">5.0</p>
                  <p className="mb-0">★★★★★</p>
                </div>
              </div>
              <div className="review text-center">
                <p className="mb-0">13</p>
                <p className="mb-0">reviews</p>
              </div>
            </div>
            <div className="more-info-container mb-4 d-flex align-items-center">
              <img className="icons mr-3" src={user} alt="User" />
              <div className="more-text">
                <p className="guest-view-text mb-0">Hosted by Pippa</p>
                <p className="mb-0">Superhost · 3 years hosting</p>
              </div>
            </div>
            <div className="more-info-container2 mb-4 d-flex align-items-center">
              <img className="iconsml mr-3" src={desk} alt="Desk" />
              <div className="more-text">
                <p className="guest-view-text mb-0">Dedicated workspace</p>
                <p className="mb-0">A room with wifi that’s well-suited for working.</p>
              </div>
            </div>
            <div className="more-info-container2 mb-4 d-flex align-items-center">
              <img className="iconsml mr-3" src={metal} alt="Metal" />
              <div className="more-text">
                <p className="guest-view-text mb-0">Pippa is a Superhost</p>
                <p className="mb-0">Superhosts are experienced, highly rated Hosts.</p>
              </div>
            </div>
            <div className="more-info-container2 mb-5 d-flex align-items-center">
              <img className="iconsml mr-3" src={user} alt="User" />
              <div className="more-text">
                <p className="guest-view-text mb-0">Dive right in</p>
                <p className="mb-0">This is one of the few places in the area with a pool.</p>
              </div>
            </div>
            <div className="description-text-container mb-5">
              <p>Some info has been automatically translated. Show original</p>
              <p className="description-text">
                Ukusa Luxury Couple Tent offers expansive views overlooking the Drakensberg Mountains. This rate includes accommodation in a king-sized bed, breakfast, dinner, and a guided walk with wildlife sightings. Excluded in this rate are drinks and additional activities such as a game drive or full body massage!
              </p>
              <p>A kitchenette, open-air bath, rain shower, and private toilet add to your comfort; while...</p>
            </div>
            <div className="offers-container mb-5">
              <h4 className="location-detail mb-4">What this place offers</h4>
              <Row className="offers-icons-container d-flex flex-wrap">
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Mountain view" />
                  <p className="mb-0">Mountain view</p>
                </Col>
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Lake access" />
                  <p className="mb-0">Lake access</p>
                </Col>
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Kitchen" />
                  <p className="mb-0">Kitchen</p>
                </Col>
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Wifi" />
                  <p className="mb-0">Wifi</p>
                </Col>
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Dedicated workspace" />
                  <p className="mb-0">Dedicated workspace</p>
                </Col>
                <Col lg={6} xs={12} className="mb-3 d-flex align-items-center">
                  <img className="o-icons mr-2" src={desk} alt="Free parking on premises" />
                  <p className="mb-0">Free parking on premises</p>
                </Col>
                <Col xs={12}>
                  <Button className="showbtn" variant="outline-dark">Show more</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="checkout-container mb-6 p-3 bg-light shadow-sm rounded">
              <h4 className="date-for-price">R3,450 ZAR night</h4>
              <Form>
                <InputGroup className="checkin-out mb-3">
                  <DatePicker
                    selected={checkInDate}
                    onChange={handleDateChange}
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    selectsRange
                    className="form-control"
                    placeholderText="Check-In - Check-Out"
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                  />
                </InputGroup>
                <Dropdown className="guest-dropdown mb-3">
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    {totalGuest ? `${totalGuest} Guest${totalGuest > 1 ? 's' : ''}` : 'Select Guests'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Form.Group className="dropdown-item d-flex justify-content-between align-items-center">
                      <Form.Label className="mb-0">Adults</Form.Label>
                      <div className="guest-count d-flex align-items-center">
                        <Button className="guest-count-btn" variant="outline-dark" onClick={handleAdultsSub}>-</Button>
                        <span className="guest-count-value mx-2">{adults}</span>
                        <Button className="guest-count-btn" variant="outline-dark" onClick={handleAdults}>+</Button>
                      </div>
                    </Form.Group>
                    <Form.Group className="dropdown-item d-flex justify-content-between align-items-center">
                      <Form.Label className="mb-0">Children</Form.Label>
                      <div className="guest-count d-flex align-items-center">
                        <Button className="guest-count-btn" variant="outline-dark" onClick={handleChildrenSub}>-</Button>
                        <span className="guest-count-value mx-2">{children}</span>
                        <Button className="guest-count-btn" variant="outline-dark" onClick={handleChildren}>+</Button>
                      </div>
                    </Form.Group>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/checkout">
                  <Button className="showbtn" variant="outline-dark">Reserve</Button>
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
