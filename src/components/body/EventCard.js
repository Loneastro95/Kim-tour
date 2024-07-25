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
import KimImg from "../../images/Party.jpg";
import './eventCard.css';
import Footer from "../footer/footer";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";



const EventCard = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://kim-tour-1.onrender.com/api/fetchData")

      .then(response => {
        console.group(response)
        console.log(response.data.events)
        setData(response.data.events
        );
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
      <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
        />
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCardClick = ((item)=>{
    console.log(data)
    navigate(`/event`, { state: { item } });
  })
  return (

    <div>
        <Header />
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {data.map((item, index) => (
              <Col key={index}>
                
                  <Card className="card mt-4" onClick={()=>handleCardClick(item)}>
                    <Card.Img variant="top" src={item.image || KimImg} />
                    <Card.Body className="cardBody">
                      <div className='d-flex card-info'>
                          <div>
                              <h3 className='text-primary'>{item.date}</h3>
                              
                          </div>
                          <div className='info'>
                              <Card.Text className="cardText">{item.name}</Card.Text>
                              <Card.Text className="cardText">{item.location}</Card.Text>
                              <Card.Text className="cardText">R{item.price}</Card.Text>
                          </div>
                      </div>
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

export default EventCard