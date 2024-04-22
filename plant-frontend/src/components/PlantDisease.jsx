import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import Navigation from './Navigation';

const PlantDisease = () => {
  const { id } = useParams(); // Get the disease ID from the URL params
  const [disease, setDisease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisease = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/get-plantdisease/${id}`);
        setDisease(response.data.disease);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching disease:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDisease();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  if (!disease) {
    return <div>No disease found</div>; // Display message if no disease is found
  }

  return (
    <div className="plant-disease-container" >
      <nav style={{ backgroundColor: '#457427', padding: '10px 20px', borderRadius: '8px', marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'right' }}>
          <li style={{ display: 'inline-block', marginRight: '30px' }}>
            <a href="/home" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Home</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '30px' }}>
            <a href="/gardening-tips" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Gardening Tips</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '30px' }}>
            <a href="/faq" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>F&Q</a>
          </li>
          <li style={{ display: 'inline-block' }}>
            <a href="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Contact</a>
          </li>
        </ul>
      </nav>
      <h1 className="disease-name">{disease.name}</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <img className="plant-disease-image" src={disease.image} alt={disease.name} />
        </div>
        <div className="content">
          <div>
            <h2>Description:</h2>
            <p>{disease.description}</p>
          </div>
          <div>
            <h2>Causes:</h2>
            <p>{disease.causes}</p>
          </div>
          <div>
            <h2>Treatment:</h2>
            <p>{disease.treatment}</p>
          </div>
          <div>
            <h2>Medicine:</h2>
            <p>{disease.medicine}</p>
          </div>
          <div>
            <h2>Care Tips:</h2>
            <p>{disease.careTips}</p>
          </div>
          <Link to="/search" className="back-button">Back to Search</Link>
        </div>
      </div>
      {/* Back button to navigate back to the search page */}
      
    </div>
  );
};

export default PlantDisease;
