import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import CookingTips from './components/CookingTips';
import CulinaryExperiences from './components/CulinaryExperiences';
import './App.css';

function App() {
  return (
    <Router>
      <div id="d">
        <header id="pic1">
          {/* <img src="https://cdn.freebiesupply.com/logos/large/2x/h-m-food-systems-1-logo-png-transparent.png" id="pic"/> */}
        </header>
        <nav >
          {/* <label id='abc'>FOOD-X</label> */}
          <ul id="list">
            {/* <li id='abc'>FOOD-X</li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/cooking-tips">Cooking Tips</Link></li>
            <li><Link to="/culinary-experiences">Culinary Experiences</Link></li>
            <label id='abc'><Link to="/"><img src="https://cdn.freebiesupply.com/logos/large/2x/food-network-1-logo-png-transparent.png" id='pic'/></Link></label>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/cooking-tips" element={<CookingTips />} />
          <Route path="/culinary-experiences" element={<CulinaryExperiences />} />
        </Routes>
        <footer id="foot">
      <center>
       <p> © 2024 Recipe Sharing Community. All rights reserved.</p>
      </center>

        </footer>
      </div>
    </Router>
  );
}

export default App;
