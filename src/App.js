import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Gamedetails from './Gamedetails';
import './App.css';

function App() {
  return (
    <Router basename="/gam-dev-portfolio">
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/game/:id" element={<Gamedetails />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;