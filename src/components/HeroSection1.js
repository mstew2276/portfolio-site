import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection1.css';
import CardItem1 from './CardItem1';

function HeroSection1() {
  return (
    <div className='hero-container1'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
        <h1>Front End Web Developer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nunc eu odio tempus, et suscipit enim viverra. Sed nec odio iaculis, commodo augue a, egestas neque. </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection1;
