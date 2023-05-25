import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import ProjectsP1 from './components/pages/ProjectsP1';
import ProjectsP2 from './components/pages/ProjectsP2';
import ProjectsP3 from './components/pages/ProjectsP3';
import ProjectsP4 from './components/pages/ProjectsP4';
import ProjectsP5 from './components/pages/ProjectsP5';
import ProjectsP6 from './components/pages/ProjectsP6';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          "<Route path='/' element={<About/>} />"
          "<Route path='/contact' element={<Contact/>} />"
          "<Route path='/projectsp1' element={<ProjectsP1/>} />"
          "<Route path='/projectsp2' element={<ProjectsP2/>} />"
          "<Route path='/projectsp3' element={<ProjectsP3/>} />"
          "<Route path='/projectsp4' element={<ProjectsP4/>} />"
          "<Route path='/projectsp5' element={<ProjectsP5/>} />"
          "<Route path='/projectsp6' element={<ProjectsP6/>} />"
        </Routes>
      </Router>
    </>
  );
}

export default App;