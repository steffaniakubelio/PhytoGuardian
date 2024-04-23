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
              <h1>Revolutionize Your Garden with PhytoGuardian</h1>
              <p>Transform Your Garden with Our Plant Disease Recognition Tool. Say goodbye to guesswork and hello to precise diagnosis, nurturing your plants to their fullest potential</p>
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
