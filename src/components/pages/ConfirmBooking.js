import React from "react";
import "./confirm.css";
import { Container, Col, Form, Dropdown, Row, Button } from "react-bootstrap";
import kimImg from "../../images/kimberly.jpg";
import metal from "../../images/icons8-achievement-48.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../header/top-header/navbar";

const ConfirmBooking = () => {
  return (
    <div>
      <NavBar />
      <Container className="container d-flex pt-5">
        <div className="left-container">
          <div className="top-header d-flex mb-5">
            <Button className="bg-light">
              <FontAwesomeIcon className="icon-arrow" icon={faArrowLeft} />
            </Button>
            <h3 className="confirm-text mt-4">Confirm your details</h3>
          </div>
          <div className="message-about-owner mb-5">
            <div>
              <h4 className="message-text">This is a rare find.</h4>
              <p className="message-owner">Andre's place is usually booked.</p>
            </div>
          </div>
          <h3>Your Trip</h3>
          <div class="trip-info mb-3">
            <h5>Date</h5>
            <div className="date d-flex">
              <p>Aug 18-23</p>
              <Button className="bg-light edit">+</Button>
            </div>
          </div>
          <div class="trip-info mb-3 ">
            <h5>Guests</h5>
            <div className="date d-flex">
              <p>1</p>
              <Button className="bg-light edit">+</Button>
            </div>
          </div>
          <div className="underline w-100"></div>
        </div>
        <div className="right-container">
          <div className="info-card mb-4">
            <div className="img-info d-flex w-100 mb-4">
              <img className="img-place" src={kimImg} />
              <div className="place-info">
                <h4 className="place-name">
                  Sasi Bush Lodge Morning Luxury Safari Tent
                </h4>
                <p className="place-type">Tent</p>
                <p>
                  {" "}
                  5.00<span className="reviews">(13 reviews)</span>
                </p>
              </div>
            </div>
            <h3>Price</h3>
            <div className="price-info d-flex mb-2">
              <p className="price">R1,500.00 ZAR x 5 nights</p>
              <p className="price">R7,500.00 ZAR</p>
            </div>
            <div className="price-info d-flex mb-2">
              <p className="price">Cleaning fee</p>
              <p className="price">R400.00 ZAR</p>
            </div>
            <div className="price-info d-flex mb-1">
              <p className="price">Airbnb service fee</p>
              <p className="price">R1,282.60 ZAR</p>
            </div>
            <div className="underline w-100"></div>
            <div className="total-info d-flex mb-1">
              <h5 className="price">Total (ZAR)</h5>
              <p className="price">R9,182.60 ZAR</p>
            </div>
          </div>
                    <div className="reserve-container d-flex">
                      <Button className=" bg-primary reserve-btn">Reserve</Button>
                    </div>
      
        </div>
      </Container>
    </div>
  );
};

export default ConfirmBooking;
