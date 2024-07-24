import React, { useState } from "react";
import Header from "../header/header";
import {
  Container,
  Col,
  Card,
  Form,
  Dropdown,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import KimImg from "../../images/Party.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import "./events.css";
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
  faMicrophone,
  faStore
} from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // Retrieve the item from state

  return (
    <div>
      <NavBar />
      <Container>
        <h3 className="w-100">{item.name}</h3>
        <img src={item.image|| KimImg} className="event-img " />
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
            <FontAwesomeIcon icon={faStore} className="me-2" />
              <div>
                <h5>{item.location}</h5>
                
              </div>
            </div>
            <div className="event-info-container mb-4">
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faStar} className="icon-lineup" />
                <div>
                  <h5>Line up</h5>
                  {[...Array(4)].map((_, index) => (
          <ol key={index}>
            <li>Doja Cat</li>
            
          </ol>
        ))}
                </div>
              </div>
              <div className="d-flex event-info ">
                <FontAwesomeIcon icon={faLock} className="user-img" />
                <div>
                  <h5>A private set by yours truly</h5>
                  <p>Just you and me, and my cats…are they invited?</p>
                </div>
              </div>
              <div className="d-flex event-info">
                <FontAwesomeIcon icon={faMusic} className="user-img" />
                <div>
                  <h5>Some of my favorite songs</h5>
                  <p>
                    I’ll be coming from the road ready to play them for you.
                  </p>
                </div>
              </div>
            </div>
            <p className="event-content">
              Fresh from headlining festivals and my European tour, I’m bringing
              my very special show directly to you in an intimate living room
              environment. Music is my passion, I can’t wait to share that piece
              of my world with you in a way you’ll never forget. Kick it with
              me, and my cats. More details coming soon.
            </p>
            {/* <div className="Meet-host-container">
              <h3>Meet the host</h3>

              <div className="host-container mb-3">
                <img src={KimImg} className="host-img mb-2" />
                <h3>Doja Cat</h3>
                <p>Started hosting in </p>
              </div>

              <div className="interests-container">
                <div className="interest d-flex">

                </div>
              </div>
            </div> */}
          </Col>
          <Col md={6} className="event-card">
            <div className="buy-ticket-container">
              <h3>Coming September</h3>
              <Button className="w-100">Buy Ticket</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
