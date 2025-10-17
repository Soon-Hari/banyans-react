import React from "react";
'use client';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function BottomFooter() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col><h5>LOCATION</h5><p>Kailua, HI</p></Col>
          <Col></Col>
          <Col><h5>BUSINESS HOURS</h5><p>Mon–Sun: 11 AM – 10 PM</p></Col>
          <Col></Col>
          <Col>
            <h3>SUBSCRIBE</h3>
            <Form.Control type="text" placeholder="Name" className="mb-2" />
            <Form.Control type="text" placeholder="Email" className="mb-2" />
            <Form.Control type="text" placeholder="Phone" className="mb-2" />
            <Button variant="dark">Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
