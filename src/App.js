import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects'; // Keep Projects for the home page
import Contact from './Contact';
import Footer from './Footer';
import Gamedetails from './Gamedetails'; // Add GameDetails component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          {/* Home Page (Includes Projects) */}
          <Route path="/" element={<Projects />} />

          {/* Game Details Page */}
          <Route path="/game/:id" element={<Gamedetails />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;