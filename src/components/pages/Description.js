import React, { useState } from "react";
import { Container, Col, Form, Dropdown, Row, Button, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../header/top-header/navbar";
import "./description.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAmenityIcon } from '../../utils/icons'; // Import the utility function
import { useLocation, useNavigate } from "react-router-dom";

// Ensure you have these imports and the library setup correctly
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faSwimmer, faCoffee, faParking } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faWifi, faSwimmer, faCoffee, faParking);

const Description = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // Retrieve the item from state

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdults = () => setAdults(adults + 1);
  const handleAdultsSub = () => adults > 1 && setAdults(adults - 1);
  const handleChildren = () => setChildren(children + 1);
  const handleChildrenSub = () => children > 0 && setChildren(children - 1);
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    const totalPrice = daysDifference * item.pricePerNight;

    const formData = {
      checkInDate,
      checkOutDate,
      adults,
      children,
      totalPrice,
      daysDifference,
      pricePerNight: item.pricePerNight,
    };

    console.log('Form Data:', formData);

    navigate('/confirm', { state: { name: item.name, guestDetails: formData, guestHouseImage: item.gallery[0] } });
  };

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h3>{item.name}</h3>
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
              <img className="img-fluid small" src={item.gallery[4]} alt="Small view 4" />
            </div>
          </Col>
        </Row>
        <Row className="Info-container">
          <Col md={8} className="details-container">
            <h4 className="location-detail">{item.location}</h4>
            <p className="num-rooms">{item.rooms[0].roomType}  1 bed  -  {item.rooms[1].roomType} 2</p>
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
            <div className="description-text-container mb-5">
              <p className="description-text">{item.description}</p>
            </div>
            <div className="offers-container mb-5">
              <h4 className="location-detail mb-4">What this place offers</h4>
              <Row className="offers-icons-container d-flex flex-wrap">
                {item.amenities.map((amenity, index) => (
                  <Col key={index} lg={6} xs={12} className="mb-3 d-flex align-items-center">
                    <FontAwesomeIcon icon={getAmenityIcon(amenity)} className="o-icons mr-2" />
                    <p className="mb-0">{amenity}</p>
                  </Col>
                ))}
                <Col xs={12}>
                  <Button className="showbtn" variant="outline-dark">Show more</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="checkout-container mb-6 p-3 bg-light shadow-sm rounded">
              <h4 className="date-for-price">R {item.pricePerNight} / night</h4>
              <Form onSubmit={handleFormSubmit}>
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
                    {adults + children ? `${adults + children} Guest${adults + children > 1 ? 's' : ''}` : 'Select Guests'}
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
                <Button className="showbtn" variant="outline-dark" type="submit">Reserve</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
