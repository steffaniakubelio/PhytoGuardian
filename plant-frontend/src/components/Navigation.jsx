import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/gardening-tips">Gardening Tips</Link></li>
        <li><Link to="/faq">F&Q</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
};

export default Navigation;
