import React from "react";
import "./confirm.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import kimImg from "../../images/kimberly.jpg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../header/top-header/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, guestDetails, guestHouseImage } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  const handleConfirm = () => {
    // Handle booking confirmation logic here
    console.log('Booking Confirmed:', guestDetails);
  };

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h3>{name}</h3>
        <Row>
          <Col md={6}>
            <img src={guestHouseImage || kimImg} className="img-fluid" alt="Guest House" />
          </Col>
          <Col md={6}>
            <div className="guest-details mb-4 p-3 bg-light shadow-sm rounded">
              <h4>Guest Details</h4>
              <p>Check-in Date: {guestDetails.checkInDate.toLocaleDateString()}</p>
              <p>Check-out Date: {guestDetails.checkOutDate.toLocaleDateString()}</p>
              <p>Adults: {guestDetails.adults}</p>
              <p>Children: {guestDetails.children}</p>
              <p>Price per Night: R {guestDetails.pricePerNight}</p>
              <p>Total Nights: {guestDetails.daysDifference}</p>
              <h5>Total Price: R {guestDetails.totalPrice}</h5>
            </div>
            <Button variant="outline-dark" onClick={handleBack} className="mr-2">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
            <Button variant="outline-dark" onClick={handleConfirm}>
              Confirm Booking
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConfirmBooking;
