import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className="home-page">
      
      <div className="outer-blur-container">
        <div className="blur-container">
                <Navigation />
          <div className="container">
            <div className="text-content">
              <h1>Find your favorite indoor plant to embrace your room.</h1>
              <p>We will help you find plants of your need and choice, with home delivery service. Check our offers in store and surround yourself with greenery.</p>
              <Link to="/search" className="btn-diseases">Look for diseases</Link>
            </div>
            <div className="image-content">
              <img src="bg-image/plant.png" alt="Image" className="image-right" />          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
