import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import "./search.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'; 
const Search = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdults = () => setAdults(adults + 1);
  const handleAdultsSub = () => adults > 1 && setAdults(adults - 1);
  const handleChildren = () => setChildren(children + 1);
  const handleChildrenSub = () => children > 0 && setChildren(children - 1);
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };
  const handleFavRestaurant = () =>{
     navigate('/restaurantsCard')
  }


  const handleFavEvent = () =>{
    navigate('/eventCard')
  }

  return (
    <Container fluid className=" p-5 hero" style={{background:'#007bff'}}>
      <div className="content">
        <div className="text-left message">
          <p className="line-one">Discover the Hidden Gems of the Diamond City</p>
          <p className="line-three">Your Next Adventure Awaits in Kimberley</p>
          <Button onClick={handleFavRestaurant} style={{background:'#669bbc'}}>Find your favourite restaurant</Button>
          <Button onClick={handleFavEvent} style={{background:'rgb(20, 33, 61)'}}>Find your favourite events</Button>

        </div>
        
      </div>
    </Container>
  );
};

export default Search;
