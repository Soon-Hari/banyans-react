import React from "react";
'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function CenterText() {
  return (
    <Container fluid className="text-center center-text">
      <Row className="justify-content-center align-content-center mt-5 pt-5">
        <Col md={8}>
          <h1>GLOBALLY INSPIRED</h1>
          <h1>LOCALLY SOURCED</h1>
          <h3>A global fusion menu meets culinary creativity at Banyans Craft Kitchen + Lounge in Kailua.</h3>
          <h5>Live Music Fridays & Saturdays</h5>
        </Col>
      </Row>
    </Container>
  );
}
