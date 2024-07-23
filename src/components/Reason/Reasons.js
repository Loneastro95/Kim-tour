import React, { useState } from "react";
import {
  Container,
  Col,
  Form,
  Dropdown,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./reason.css"

const Reasons = () => {
  const reasons = [
    "Iconic Big Hole: See the world’s largest hand-dug excavation and learn about its mining history.",
    "Rich History: Explore Kimberley’s role in the diamond rush and its historic architecture.",
    "Cultural Heritage: Experience the vibrant local arts scene and cultural events.",
    "Local Cuisine: Enjoy unique South African dishes and local specialties.",
    "Warm Hospitality: Discover the friendly and welcoming spirit of the community.",
    "Scenic Beauty: Appreciate the natural landscapes and stunning views of the Northern Cape.",
    "Historical Museums: Visit museums like the Kimberley Mine Museum for deep dives into the region’s past.",
    "Unique Attractions: Explore lesser-known but fascinating sites like the William Humphreys Art Gallery.",
  ];
  return (
    <Container>
      <h3 className="w-100">Reasons to visit Kimberley</h3>
      <ul>{reasons.map((reason)=>(
        <li className="reason-text">{reason}</li>
      ))}</ul>
    </Container>
  );
};

export default Reasons;
