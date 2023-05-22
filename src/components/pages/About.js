import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HeroSection1 from '../HeroSection1';
import ProjectMain from '../ProjectsMain';
import Footer from '../Footer';

function About() {
  return (
    <>
    <HeroSection1 />
    <HeroSection/>
    <ProjectMain />
    <Footer />
    </>
  );
}

export default About;