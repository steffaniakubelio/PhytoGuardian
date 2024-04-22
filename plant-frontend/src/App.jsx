// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import GardeningTips from './components/GardeningTips';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import Search from './components/Search';
import PlantDisease from './components/PlantDisease';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gardening-tips" element={<GardeningTips />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/plantdisease/:id" element={<PlantDisease />} /> {/* Route for individual plant disease */}
      </Routes>
    </Router>
  );
}

export default App;
