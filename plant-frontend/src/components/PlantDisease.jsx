import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="plant-disease-container">
      <h1>{disease.name}</h1>
      <img src={disease.image} alt={disease.name} />
      {/* <img src={`/images/${disease.image}`} alt={disease.name} /> */}

      <div>
        <h2>Causes:</h2>
        <p>{disease.causes}</p>
      </div>
      <div>
        <h2>Treatment:</h2>
        <p>{disease.treatment}</p>
      </div>
      <div>
        <h2>Care Tips:</h2>
        <p>{disease.careTips}</p>
      </div>
    </div>
  );
//   const imageUrl = `http://localhost:5001/${disease.image}`;

//   return (
//     <div className="plant-disease-container">
//       <h1>{disease.name}</h1>
//       <img src={imageUrl} alt={disease.name} />
//       <div>
//         <h2>Causes:</h2>
//         <p>{disease.causes}</p>
//       </div>
//       <div>
//         <h2>Treatment:</h2>
//         <p>{disease.treatment}</p>
//       </div>
//       <div>
//         <h2>Care Tips:</h2>
//         <p>{disease.careTips}</p>
//       </div>
//     </div>
//   );
};

export default PlantDisease;
