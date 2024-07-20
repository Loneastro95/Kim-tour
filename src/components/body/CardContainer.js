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
      <Row>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Link to="/description">
            <Card style={{ width: "18rem" }} className="mt-4">
              <Card.Img variant="top" src={KimImg} />
              <Card.Body className="cardBody">
                <Card.Title>Location</Card.Title>
                <Card.Text class="cardText">Hosted By</Card.Text>
                <Card.Text class="cardText">Date</Card.Text>
                <Card.Text class="cardText">
                  <span>Price</span> night
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mb-4">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Img variant="top" src={KimImg} />
            <Card.Body className="cardBody">
              <Card.Title>Location</Card.Title>
              <Card.Text class="cardText">Hosted By</Card.Text>
              <Card.Text class="cardText">Date</Card.Text>
              <Card.Text class="cardText">
                <span>Price</span> night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardContainer;
