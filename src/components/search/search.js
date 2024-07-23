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
const Search = () => {
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

  return (
    <Container fluid className=" p-5 hero" style={{background:'#14213d'}}>
      <div className="content">
        <div className="text-left message">
          <p className="line-one">Discover the Hidden Gems of Northern Cape</p>
          <p className="line-three">Your Next Adventure Awaits in South Africa's Northern Cape</p>
          <Button style={{background:'#669bbc'}}>Find your favourite restaurant</Button>
          <Button style={{background:''}}>Find your favourite events</Button>

        </div>
        
      </div>
    </Container>
  );
};

export default Search;
