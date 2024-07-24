import React, { useEffect, useState } from "react";
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
import KimImg from "../../images/big-hole.jpg";
import "./restaurantCard.css";
import Footer from "../footer/footer";
import axios from "axios";
const AttractionsCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://kim-tour-1.onrender.com/api/fetchData")
      .then(response => {
        console.log(response.data.attractionsitess)
        setData(response.data.attractionsites
        );
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCardClick = ((item)=>{
    console.log(data)
    navigate(`/attraction`, { state: { item } });
  })


  return (
    <div>
    <Header />
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4"  >
        {data.map((item, index) => (
          <Col key={index}>
              <Card className="card mt-4" onClick={()=>handleCardClick(item)} >
                <Card.Img variant="top" src={item.gallery[0] || KimImg} />
                <Card.Body className="cardBody">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="cardText">
                    {item.location}
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
  </div>
  )
}

export default AttractionsCard