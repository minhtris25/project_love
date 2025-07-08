import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home';
import LoveRoom from './page/LoveRoom'; // Adjust path as needed
import './App.css'; // Or your global CSS file if you have global resets

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loveplanet" element={<LoveRoom />} />
      </Routes>
    </Router>
  );
}

export default App;