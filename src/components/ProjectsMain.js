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
            src='./images/profilepic.png'
            h1='P1/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp1'
            />
            <CardItem2
            src='./images/profilepic.png'
            h1='P2/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp2'
            />
            <CardItem2
            src='./images/profilepic.png'
            h1='P3/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp3'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem2 
            src='./images/profilepic.png'
            h1='P4/'
            text='Nam venenatis sem a lectus ultricies lobortis. Nunc finibus et metus eu blandit. Curabitur bibendum pharetra nulla, ac malesuada tortor varius nec. Duis at lorem est. Quisque elementum, justo '
            path='/projectsp4'
            />
            <CardItem2 
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
            />
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
