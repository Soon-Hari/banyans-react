'use client';
import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function BottomFooter() {
  return (
    <footer className="bg-light py-4 mt-auto border-top">
      <Container>
        <Row className="text-center text-md-start">
          <Col md>
            <h5>LOCATION</h5>
            <p>Kailua, HI</p>
          </Col>
          <Col md>
            <h5>HOURS</h5>
            <p>Mon–Sun: 11 AM – 10 PM</p>
          </Col>
          <Col md>
            <h5>SUBSCRIBE</h5>
            <Form.Control type="text" placeholder="Name" className="mb-2" />
            <Form.Control type="email" placeholder="Email" className="mb-2" />
            <Button variant="dark" className="w-100">Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
