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
import KimImg from "../../images/restaurant.avif";
import "./restaurantCard.css";
import axios from "axios";
import Footer from "../footer/footer";
import { RotatingLines } from "react-loader-spinner";

const RestaurantCard = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get("https://kim-tour-1.onrender.com/api/fetchData")
      .then(response => {
        console.log(response.data.restaurants)
        setData(response.data.restaurants
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
    navigate(`/restaurants`, { state: { item } });
  })

  return (
    <div>
      <Header />
      <Container className="position-relative">
      <div className="card-container row flex-nowrap" ref={containerRef}>
          {data.map((item, index) => (
            <div className="col-sm-4 card-inner" key={index}>
              <Card className="card mt-4" onClick={() => handleCardClick(item)}>
                <Card.Img variant="top" src={item.gallery[0] || KimImg} />
                <Card.Body className="cardBody">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="cardText">{item.location}</Card.Text>
                  <Card.Text className="cardText">
                    <span>Price: {item.pricePerNight}</span> per night
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="scroll-btn">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="scroll-button left"
          onClick={() => handleScroll("left")}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="scroll-button right"
          onClick={() => handleScroll("right")}
        />
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default RestaurantCard;
