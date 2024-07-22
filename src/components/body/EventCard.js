import React from 'react';
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
import { Link } from "react-router-dom";
import KimImg from "../../images/Party.jpg";
import './eventCard.css';



const EventCard = () => {
  return (

    <div>
        <Header />
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {[...Array(8)].map((_, index) => (
              <Col key={index}>
                <Link to="/event" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card className="card mt-4">
                    <Card.Img variant="top" src={KimImg} />
                    <Card.Body className="cardBody">
                      <div className='d-flex card-info'>
                          <div>
                              <h3 className='text-primary'>Sep</h3>
                              <h5>23</h5>
                          </div>
                          <div className='info'>
                              <Card.Text className="cardText">Hosted By: Lebogang Mylas</Card.Text>
                              <Card.Text className="cardText">Join a living room session with Lbs</Card.Text>
                          </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  )
}

export default EventCard