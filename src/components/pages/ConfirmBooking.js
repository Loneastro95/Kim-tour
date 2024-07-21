import React from 'react';
import './confirm.css';
import { Container, Col, Form, Dropdown, Row, Button } from "react-bootstrap";
import kimImg from "../../images/kimberly.jpg";
import metal from "../../images/icons8-achievement-48.png";

const ConfirmBooking = () => {
  return (
    <Container className='container d-flex '>
        <div className='left-container'>
            <div className='top-header'>
               <h3>Confirm and pay</h3> 
            </div>
            <img src={metal} class="icon-tick"/>
        </div>
        <div className='right-container'></div>

    </Container>
  )
}

export default ConfirmBooking