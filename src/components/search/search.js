import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import "./search.css";
import { Container, Col, Form, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdults = () => {
    setAdults(adults + 1);
  };

  const handleAdultsSub = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildren = () => {
    setChildren(children + 1);
  };

  const handleChildrenSub = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <Container fluid className=" bg-primary p-5 mb-6 hero">
        <div className="text-left w-100 mb-4 message">
          <p className="line-one">Where to next, Sontlaba?</p>
          <p className="line-two">Find exclusive Genius rewards in every corner of the world!</p>
        </div>
      <Navbar className="justify-content-between search-container flex-wrap flex-1">
        <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Place"
              aria-label="Place"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <InputGroup className="checkin-out">
            <Col xs="auto">
              <div className="inner-addon right-addon">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleDateChange}
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  selectsRange
                  className="form-control"
                  placeholderText="Check-In - Check-Out"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                />
              </div>
            </Col>
          </InputGroup>
        </Form>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            People Staying
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
      </Navbar>
    </Container>
  );
};

export default Search;