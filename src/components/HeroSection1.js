import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection1.css';
import CardItem1 from './CardItem1';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function HeroSection1() {
  return (
    <div className='hero-container1'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
        <h1>Junior Front End Web Developer</h1>
        <p>My name is Mason Stewart I am a nucamp coding bootcamp graduate based in the Seattle area, My specialties are in front end web development mainly working with React and Bootstrap, additionally knowledgable of back end devlopment utilizing tools such as python. </p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nunc eu odio tempus, et suscipit enim viverra. Sed nec odio iaculis, commodo augue a, egestas neque. 26words </p> */}
        <section class='social-media'>
        <div class='social-media-wrap'>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='https://github.com/mstew2276'
              target='_blank'
              aria-label='Github'
            >
              <i class='fa-brands fa-github' />
            </Link>
            <Link
              class='social-icon-link resume'
              to='https://1drv.ms/w/s!AjazutueHmfWhNwwjOIOSartoMVHZg?e=CFYZWG'
              target='_blank'
              aria-label='Resume'
            >
              <i class='fa-regular fa-id-card' />
            </Link>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>  */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter'></i>
            </Link> */}
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/mason-stewart-460a0b1b9/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default HeroSection1;
