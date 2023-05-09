import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <div className='hero-profile'>
        <img src='./public/logo192.png'/>
      <h1>MASON STEWART</h1>
      <p>Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo porttitor maximus facilisis, quam magna</p>
      </div>
    </div>
  );
}

export default HeroSection;
