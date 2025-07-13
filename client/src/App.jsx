import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import LoveRoom from './page/LoveRoom'; // Adjust path as needed
import LetterPage from './page/LetterPage';// Adjust path as needed
import './App.css'; // Or your global CSS file if you have global resets

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loveplanet" element={<LoveRoom />} />
        <Route path="/letter" element={<LetterPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;