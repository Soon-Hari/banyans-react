'use client';
import React from 'react';
import TopMenu from '../components/TopMenu';
import CenterText from '../components/CenterText';
import BottomFooter from '../components/BottomFooter';
import '../style.css';

export default function Page() {
  return (
    <>
      <TopMenu />
      <section className="hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-overlay"></div>
        <div className="hero-content text-white">
          <h1 className="display-3 fw-bold">Banyans Craft Kitchen + Lounge</h1>
          <p className="lead mb-4">Global fusion meets local flavor in the heart of Kailua</p>
          <a href="#" className="btn btn-outline-light btn-lg">View Menu</a>
        </div>
      </section>
      <CenterText />
      <BottomFooter />
    </>
  );
}
