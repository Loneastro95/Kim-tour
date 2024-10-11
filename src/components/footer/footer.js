import React, {useState, useEffect} from "react";
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
import { Link, useNavigate } from "react-router-dom";
import KimImg from "../../images/mall.jpg";
import "./footer.css";
import axios from "axios";

const footer = () => {
  return (
    <div className="footer-container mt-3 mb-4">
        <Container className="w-100">
            <Row className="footer-row w-100 pt-5">
                <Col lg={3} xs={12}>
                  <h4>About Kim-tour</h4>
                  <div className="foot-info">
                    <p>About us</p>
                    <p>Press</p>
                    <p>Terms of Service</p>
                    <p>Trust & Safety</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col lg={3} xs={12}>
                  <h4>Explore</h4>
                  <div className="foot-info">
                    <p>Write a review</p>
                    <p>Travel Articles</p>
                    <p>Add a Place</p>
                  </div>
                </Col>
                <Col lg={3} xs={12} >
                  <h4>Do Business With Us</h4>
                  <div className="foot-info">
                    <p>Owners</p>
                    <p>Business Advantage</p>
                    <p>Advertise with Us</p>
                  </div>
                </Col>
                <Col lg={3} xs={12}>
                  <h4>Kim-Tour</h4>
                  <p>You can book tickets for attractions and make reservations on our site.</p>
        
                </Col>
            </Row>
            <h5>© 2024 Kim-tour LLC All rights reserved.</h5>
        </Container>
    </div>
  )
}

export default footer