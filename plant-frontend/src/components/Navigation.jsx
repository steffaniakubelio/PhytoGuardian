import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/gardening-tips">Gardening Tips</Link></li>
        <li><Link to="/faq">F&Q</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Update link to navigate to Search.jsx */}
      </ul>
    </nav>
  );
};

export default Navigation;
