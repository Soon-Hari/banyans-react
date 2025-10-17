'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function CenterText() {
  return (
    <Container className="text-center my-5">
      <h1 className="display-4 fw-bold">Banyans Craft Kitchen + Lounge</h1>
      <p className="lead">Where global fusion meets local flavor in the heart of Kailua.</p>
    </Container>
  );
}
