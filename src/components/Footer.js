import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact</Link>
            {/* <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Links</h2>
            <Link to='https://github.com/mstew2276'>Github</Link>
            {/* <Link to='/images/MasonStewartResume.pdf'>Resume</Link> */}
            {/* <Link to='/'>Twitter</Link> */}
            <Link to='https://www.linkedin.com/in/mason-stewart-460a0b1b9/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media2'>
        <div class='social-media-wrap2'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Mason Stewart
            </Link>
          </div>
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

export default Footer;
