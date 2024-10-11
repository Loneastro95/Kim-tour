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
  faStore,
  faMapMarkerAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // Retrieve the item from state

  const handlebackbtn = () =>{
    navigate('/eventCard')
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h3 className="w-100"><FontAwesomeIcon onClick={handlebackbtn} icon={faArrowLeft} className="me-2 arrow"/>{item.name}</h3>
        <img src={item.image || KimImg} className="event-img " />
        <Row className="d-flex w-100 ">
          <Col md={6} className="event-card">
            <div className="d-flex host-info mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              <div>
                <h5 className="mt-3">{item.location}</h5>
                
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
              {item.description}
            </p>

          </Col>
          <Col md={6} className="event-card checkout mt-3">
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
