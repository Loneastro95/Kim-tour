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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAmbulance,
    faHospital,
    faShieldAlt,
    faFireExtinguisher,
} from "@fortawesome/free-solid-svg-icons";
import './emergency.css'
import Footer from "../footer/footer";

const EmergencyCard = () => {
  return (
    <div>
        <Header/>
        <Container>
            <Row className="">
                <Col lg={3} className="mt-5">
                <div className="d-flex Emcard">
                <FontAwesomeIcon icon={faAmbulance} size="2x" className="font"/>
                     <div className="w-100 number">
                        <h5>Ambulance</h5>
                        <p>053 831 1954 / 084 124</p>
                     </div>
        
                </div>
                </Col>

                <Col lg={3} className="mt-5">
                <div className="d-flex Emcard">
                <FontAwesomeIcon icon={faHospital} size="2x" className="font"/>
                     <div className="w-100 number">
                        <h5>Hospital</h5>
                        <p>053 802 9111</p>
                     </div>
        
                </div>
                </Col>
                <Col lg={3} className="mt-5">
                <div className="d-flex Emcard">
                <FontAwesomeIcon icon={faShieldAlt} size="2x" className="font"/>
                     <div className="w-100 number">
                        <h5>Police</h5>
                        <p>053 838 4200 / 112</p>
                     </div>
        
                </div>
                </Col>
                <Col lg={3} className="mt-5">
                <div className="d-flex Emcard">
                <FontAwesomeIcon icon={faFireExtinguisher} size="2x" className="font"/>
                     <div className="w-100 number">
                        <h5>Fire Brigade</h5>
                        <p>053 832 4211</p>
                     </div>
        
                </div>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default EmergencyCard