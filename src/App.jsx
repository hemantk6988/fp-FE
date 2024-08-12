import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import CookingTips from './components/CookingTips';
import CulinaryExperiences from './components/CulinaryExperiences';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/cooking-tips">Cooking Tips</Link></li>
            <li><Link to="/culinary-experiences">Culinary Experiences</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/cooking-tips" element={<CookingTips />} />
          <Route path="/culinary-experiences" element={<CulinaryExperiences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
