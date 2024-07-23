import React from "react";
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
import KimImg from "../../images/restaurant.avif";
import "./restaurantCard.css";

const RestaurantCard = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {[...Array(8)].map((_, index) => (
            <Col key={index}>
              <Link
                to="/restaurants"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="card mt-4">
                  <Card.Img variant="top" src={KimImg} />
                  <Card.Body className="cardBody">
                    <Card.Title>Kimchi Kitchen</Card.Title>
                    <Card.Text className="cardText">
                      Shop 1, Royalyard Park 1, 9 Jacobus Smit Ave, Royal Glen,
                      Kimberley, 8301
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RestaurantCard;
