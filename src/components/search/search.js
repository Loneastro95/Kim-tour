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
    <Container fluid className="bg-primary p-5 mb-6 hero">
      <div className="content">
        <div className="text-left message">
          <p className="line-one">Discover the Hidden Gems of Northern Cape</p>
          <p className="line-three">Your Next Adventure Awaits in South Africa's Northern Cape</p>
        </div>
        <Navbar className="search-container">
          <div className="search-form">
            <Form inline>
              <InputGroup className="input-group">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control placeholder="Place" aria-label="Place" aria-describedby="basic-addon1" />
              </InputGroup>
            </Form>
            <Form inline>
              <div className="datepicker-container">
                <div className="datepicker-item">
                  <DatePicker
                    selected={checkInDate}
                    onChange={dates => handleDateChange(dates)}
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    selectsStart
                    className="form-control datepicker-input"
                    placeholderText="Check-In"
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                  />
                  <FaCalendarAlt className="datepicker-icon" />
                </div>
                <div className="datepicker-item">
                  <DatePicker
                    selected={checkOutDate}
                    onChange={dates => handleDateChange(dates)}
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    selectsEnd
                    minDate={checkInDate ? checkInDate : new Date()}
                    className="form-control datepicker-input"
                    placeholderText="Check-Out"
                    dateFormat="yyyy-MM-dd"
                  />
                  <FaCalendarAlt className="datepicker-icon" />
                </div>
              </div>
            </Form>
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <MdPeople className="dropdown-icon" /> People
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="d-flex justify-content-center pl-5 pr-5">
                  <p className="font-weight-bold">Adults</p>
                  <div className="button-container">
                    <button onClick={handleAdultsSub}>-</button>
                    <span className="px-2">{adults}</span>
                    <button onClick={handleAdults}>+</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center pl-5 pr-5">
                  <p className="font-weight-bold">Children</p>
                  <div className="button-container">
                    <button onClick={handleChildrenSub}>-</button>
                    <span className="px-2">{children}</span>
                    <button onClick={handleChildren}>+</button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </div>
    </Container>
  );
};

export default Search;
