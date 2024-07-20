import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Col, Form, Dropdown, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import kimImg from "../../images/kimberly.jpg";
import NavBar from "../header/top-header/navbar";
import "./description.css";
import user from "../../images/icons8-user-24.png";
import desk from "../../images/icons8-swimming-pool-50.png";
import metal from "../../images/icons8-achievement-48.png";
import dive from "../../images/icons8-swimming-pool-50.png";

const Description = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);

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
    <div>
      <NavBar />
      <Container>
        <h1>Sasi Bush Lodge Morning Luxury Safari Tent</h1>
        <div className="imgContianer">
          <img className="big" src={kimImg} />
          <div className="smallContainer">
            <div className="smallImg">
              <img className="small" src={kimImg} />
              <img className="small" src={kimImg} />
            </div>
            <div className="smallImg">
              <img className="small" src={kimImg} />
              <img className="small" src={kimImg} />
            </div>
          </div>
        </div>
        <div className="Info-container">
          <div className="details-container">
            <h4 className="loction-detail">
              Private room in tent in Bergville, Northern Drakensberg, South
              Africa
            </h4>
            <p className="num-rooms">2 guests-1bedroom-1bed-1.5baths</p>
            <div className="rating-container mb-4">
              <div className="guest-fav">
                <h1 className="fav">Guest</h1>
                <h1 className="fav">favorite</h1>
              </div>
              <div className="guest-view">
                <p className="guest-view-text">
                  One of the most loved homes on Airbnb, according to guest
                </p>
                <div className="rating">
                  <p>5.0</p>
                  <p>*****</p>
                </div>
              </div>
              <div className="review">
                <p>13</p>
                <p>reviews</p>
              </div>
            </div>

            <div className="more-info-container mb-4">
              <img className="icons" src={user} />
              <div className="more-text">
                <p className="guest-view-text">Hosted by Pippa</p>
                <p className="">Superhost3-years hosting</p>
              </div>
            </div>

            <div className="more-info-container2">
              <img className="iconsml" src={desk} />
              <div className="more-text">
                <p className="guest-view-text">Dedicated workspace</p>
                <p className="">
                  A room with wifi that’s well-suited for working.
                </p>
              </div>
            </div>

            <div className="more-info-container2">
              <img className="iconsml" src={metal} />
              <div className="more-text">
                <p className="guest-view-text">Pippa is a Superhost</p>
                <p className="">
                  Superhosts are experienced, highly rated Hosts.
                </p>
              </div>
            </div>

            <div className="more-info-container2 line mb-5">
              <img className="iconsml" src={user} />
              <div className="more-text">
                <p className="guest-view-text">Dive right in</p>
                <p className="">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>

            <div className="description-text-container mb-5">
              <p>Some info has been automatically translated. Show original</p>
              <p className="decription-text">
                Ukusa Luxury Couple Tent offers expansive views over-looking the
                Drakensberg Mountains. This rate includes accommodation in a
                king-sized bed, breakfast, dinner and a guided walk with
                wildlife sightings. Excluded in this rate are drinks and
                additional activities such as a game drive or full body massage!
              </p>
              <p>
                A kitchenette, open-air bath, rain shower and private toilet add
                to your comfort; while...
              </p>

            </div>

            {/* <div className="where-sleep-container mb-5">
              <h4 className="loction-detail mb-2">Where you’ll sleep</h4>
              <div className="sleep-container">
                <img className="icon-sleep" src={desk}/>
                <h6 className="location-detail">Bedroom</h6>
                <p>1 king bed</p>
              </div>
            </div> */}

            <div className="offers-container mb-5">
            <h4 className="loction-detail mb-4">What this place offers</h4>
            <div className="offers-icons-container d-flex flex-wrap justify-content-between">
              <Row>
                <Col lg={6} xs={12}>
                  <div className="d-flex mb-3">
                   <img className="o-icons" src={desk}/>
                    <p>Mountain view</p>
                  </div>
                </Col>
                <Col lg={6} xs={12}>
                  <div className="d-flex mb-3">
                   <img className="o-icons" src={desk}/>
                    <p>Lake access</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex mb-3" xs={12}>
                   <img className="o-icons" src={desk}/>
                    <p>Kitchen</p>
                  </div>
                </Col>
                <Col lg={6} xs={12}>
                  <div className="d-flex mb-3">
                   <img className="o-icons" src={desk}/>
                    <p>Wifi</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex mb-3">
                   <img className="o-icons" src={desk}/>
                    <p>Dedicated workspace</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex mb-3">
                   <img className="o-icons" src={desk}/>
                    <p>Free parking on premises</p>
                  </div>
                </Col>
                <Col lg={6}>
                <Button className="showbtn" variant="outline-dark">
                    Show more 
                  </Button>
                </Col>
              </Row>     
            </div>
            </div>
          </div>
          <Row>
            <Container className="checkout-container">
              <div className="checkout-box">
                <h4 className="date-for-price">R3,450 ZAR night</h4>
                <Form inline>
                  <InputGroup className="checkin-out">
                    <Col xs="12">
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
                  <Dropdown.Toggle
                    className="guest"
                    variant="primary"
                    id="dropdown-basic"
                  >
                    GUESTS
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="d-flex pl-5 pr-5 num-people">
                      <div>
                        <p className="font-weight-bold">Adults</p>
                        <p>Adult 13+</p>
                      </div>
                      <div className="button-container">
                        <button onClick={handleAdultsSub}>-</button>
                        <span className="px-2">{adults}</span>
                        <button onClick={handleAdults}>+</button>
                      </div>
                    </div>
                    <div className="d-flex pl-5 pr-5  num-people">
                      <div>
                        <p className="font-weight-bold">Children</p>
                        <p>Children 2-12</p>
                      </div>
                      <div className="button-container">
                        <button onClick={handleChildrenSub}>-</button>
                        <span className="px-2">{children}</span>
                        <button onClick={handleChildren}>+</button>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Col xs="12">
                  <Button className="bookbtn" variant="outline-primary">
                    Book Now!
                  </Button>
                </Col>
                <p className="not-charge">You won't be charged yet</p>
                <div className="multiply-price-night">
                  <p className="price-night">R3,450 ZARx5 nights</p>
                  <p className="total">R17,250 ZAR</p>
                </div>

                <div className="total-div">
                  <p className="total-text">TOTAL</p>
                  <p className="total-text">R17,250 ZAR</p>
                </div>
              </div>
            </Container>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Description;
