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
import KimImg from "../../images/big-hole.jpg";
import "./restaurantCard.css";
import Footer from "../footer/footer";
import axios from "axios";
const AttractionsCard = () => {

  useEffect(() => {
    axios.get("https://kim-tour-1.onrender.com/api/fetchData")
      .then(response => {
        console.log(response.data.accommodations)
        setData(response.data.accommodations
        );
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
    <Header />
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {[...Array(8)].map((_, index) => (
          <Col key={index}>
            <Link
              to="/attraction"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="card mt-4">
                <Card.Img variant="top" src={KimImg} />
                <Card.Body className="cardBody">
                  <Card.Title>The Big Hole Museum</Card.Title>
                  <Card.Text className="cardText">
                    161, Tucker St, West End, Kimberley, 8301
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
  </div>
  )
}

export default AttractionsCard