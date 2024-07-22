import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KimImg from "../../images/kimberly.jpg";
import "./card.css";
import { Link } from "react-router-dom";

function CardContainer() {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {[...Array(8)].map((_, index) => (
          <Col key={index}>
            <Link to="/description" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="card mt-4">
                <Card.Img variant="top" src={KimImg} />
                <Card.Body className="cardBody">
                  <Card.Title>Location</Card.Title>
                  <Card.Text className="cardText">Hosted By</Card.Text>
                  <Card.Text className="cardText">Date</Card.Text>
                  <Card.Text className="cardText">
                    <span>Price</span> night
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardContainer;
