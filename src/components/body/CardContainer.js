import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KimImg from "../../images/kimberly.jpg"; // Default image if needed
import "./card.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CardContainer() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/fetchData")
      .then(response => {
        console.log(response)
        setData(response.data.accommodations
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
    navigate(`/description`, { state: { item } });
  })

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {data.map((item, index) => (
          <Col key={index}>
            
              <Card className="card mt-4"  onClick={()=>handleCardClick(item)} >
                <Card.Img variant="top" src={item.gallery[0] || KimImg} />
                <Card.Body className="cardBody">
                  <Card.Title>locatio</Card.Title>
                  <Card.Text className="cardText">Hosted By</Card.Text>
                  <Card.Text className="cardText">Date</Card.Text>
                  <Card.Text className="cardText">
                    <span>Price: price</span> per night
                  </Card.Text>
                </Card.Body>
              </Card>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardContainer;
