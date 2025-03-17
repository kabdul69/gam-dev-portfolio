import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import GameDetails from './Gamedetails';
import './App.css';

function App() {
  return (
    <Router basename="/gam-dev-portfolio"> {/* Use this if deploying on a sub-path */}
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Game Details Page */}
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
