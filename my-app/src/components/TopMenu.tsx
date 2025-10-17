'use client';
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

export default function TopMenu() {
  return (
    <Navbar expand="lg" bg="light" className="fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/images/banyans-logo.png" width="220" alt="Banyans Logo" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Menu</Nav.Link>
          <Nav.Link href="#">Reservations</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
