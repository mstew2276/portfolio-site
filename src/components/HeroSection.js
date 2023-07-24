import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardItem from './CardItem';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='./videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='hero-profile'>
        <ul className='cards__items'>
            <CardItem 
            src='/images/ResumePortfolioPicCrop.jpg'
            h1='MASON STEWART'
            text='I am a hardworking individual who strives to overcome any challenges that arise, my greatest traits are my ability learn and my ability to adapt to different methods of work, given the oppurtunity I will bring efficiency and exceptional collaberation to your workplace.'
            // text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo 29words '
            />
        </ul>
      </div>
      <div className='hero-skills-btns'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PRACTICED LEARNED SKILLS: 
        </Button>
      </div>
      <div className='hero-btns'>
      
        <Button
          className='btns0'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Javascript
        </Button>
        <Button
          className='btns1'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          HTML
        </Button>
        <Button
          className='btns2'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CSS
        </Button>
        <Button
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          React
        </Button>
        <Button
          className='btns4'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Python
        </Button>
        
        <Button
          className='btns6'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Bootstrap
        </Button>
        
      </div>
      <div className='hero-skills-btns'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOTCAMP LEARNED SKILLS: 
        </Button>
      </div>
      <div className='hero-btns'>
      
        <Button
          className='btns0'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          React Native
        </Button>
        <Button
          className='btns1'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Node JS
        </Button>
        <Button
          className='btns2'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Google Cloud & Firebase
        </Button>
        <Button
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Postgres SQL
        </Button>
        <Button
          className='btns4'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Docker
        </Button>
        
        
        
      </div>
      <div className='hero-btns'>
      <Button
          className='btns6'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Flask & Django
        </Button>
        <Button
          className='btns0'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Amazon AWS
        </Button>
        <Button
          className='btns1'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Microsoft Azure
        </Button>
        <Button
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SDLC
        </Button>
        <Button
          className='btns4'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CI/CD
        </Button>
        
        <Button
          className='btns6'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DevOps
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;


