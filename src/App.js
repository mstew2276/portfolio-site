import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          "<Route path='/' element={<About/>} />"
          "<Route path='/contact' element={<Contact/>} />"
          "<Route path='/projects' element={<Projects/>} />"
        </Routes>
      </Router>
    </>
  );
}

export default App;