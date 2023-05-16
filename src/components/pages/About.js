import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HeroSection1 from '../HeroSection1';
import ProjectMain from '../ProjectsMain';

function About() {
  return (
    <>
    <HeroSection1 />
    <HeroSection/>
    <ProjectMain />
    </>
  );
}

export default About;