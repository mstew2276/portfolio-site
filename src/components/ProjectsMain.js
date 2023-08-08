import React, {Component} from 'react';
import '../App.css';
import { Button } from './Button';
import './ProjectsMain.css';
import CardItem2 from './CardItem2';
import { Element } from 'react-scroll'


function ProjectSection() {
  return (
    <div className='cards'>
      <div id='projects'></div>
    <div className='project__container'>
      {/* <video src='./videos/video-1.mp4' autoPlay loop muted /> */}
      
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem2
            src='./images/p2ulious.png'
            h1='Portfolio'
            text="portfolio-site is the culmination of the skills I've been practicing and projects I've been currently working on and who I am. "
            path='https://main.d2iq1qm47hdm1e.amplifyapp.com/'
            />
            <CardItem2
            src='./images/p2ulious.png'
            h1='Ulious Solutions'
            text='UliousPage is a bootstrap project of mine to create a landing page for my own social media marketing agrency built upon the nucampsite we created for one of our bootstrap nucamp projects. '
            path='https://docs.google.com/document/d/1JTXhZBiOIiESCujJLioFPtBrXUEVbdojT-eDVDfter8/edit?usp=sharing'
            />
            
        </ul>
        <ul className='cards__items'>
        <CardItem2
            src='./images/p3TurboUp.png'
            h1='Turbo Up'
            text='carappproject a.k.a TurboUp is as the name implies a car app project, the idea for this was to create a react app for the car community in which people could find there vehicle and see what kind of mods would work for their vehicle. '
            path='https://main.d3byc55h7tfiuv.amplifyapp.com/'
            />
            <CardItem2 
            src='./images/p4python.png'
            h1='Python Game'
            text='Python Game is a project my classmates and I at Nucamp were told to create to show our understanding of variables and funcitons and how it can be used to create a turned based terminal game. '
            path="https://1drv.ms/f/s!AjazutueHmfWpd9fmukNIvsj4hGEKg?e=fYdPIG"
            />
            {/* <CardItem2 
            src='./images/profilepic.png'
            h1='P5/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp5'
            />
            <CardItem2 
            src='./images/profilepic.png'
            h1='P6/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp6'
            /> */}
            </ul>
            </div>
        </div>

        

      {/* <div className='project-skills-btns'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SKILLS: 
        </Button>
      </div>
      <div className='project-btns'>
      
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
          className='btns5'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Node JS
        </Button>
        <Button
          className='btns6'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SQL
        </Button>
      </div> */}
    </div>
  );
}

export default ProjectSection;
