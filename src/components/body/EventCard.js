import React, {useState, useEffect, useRef} from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
  const containerRef = useRef(null);  

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

  const handleScroll = (direction) => {
    if (direction === "left") {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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
        <Container className="position-relative">
        <div className="card-container row" ref={containerRef}>
          {data.map((item, index) => (
             <div className="col-sm-4 card-inner" key={index}>
                
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
              </div>
            ))}
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default EventCard