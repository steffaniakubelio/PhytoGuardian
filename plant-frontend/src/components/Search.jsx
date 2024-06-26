import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';
import SelectInput from './SelectInput';
import RangeInput from './RangeInput';
import axios from 'axios'; 
import '../index.css';
import Navigation from './Navigation';


const Search = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [severity, setSeverity] = useState('');
  const [affectedParts, setAffectedParts] = useState([]);
  const [plantType, setPlantType] = useState('');
  const [ageOfPlant, setAgeOfPlant] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState('');
  const navigate = useNavigate();

  const handleSymptomChange = (event) => {
    const value = event.target.value;
    setSymptoms(
      symptoms.includes(value)
        ? symptoms.filter(symptom => symptom !== value)
        : [...symptoms, value]
    );
  };  

  const handleAffectedPartChange = (event) => {
    const value = event.target.value;
    setAffectedParts(
      affectedParts.includes(value)
        ? affectedParts.filter(part => part !== value)
        : [...affectedParts, value]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      symptoms.length === 0 ||
      severity === '' ||
      affectedParts.length === 0 ||
      plantType === '' ||
      ageOfPlant === '' ||
      weatherConditions === '' ||
      wateringFrequency === ''
    ) {
      alert('Please enter all fields');
      return;
    }
    
    try {
      const response = await axios.get('http://localhost:5001/search-plantdisease', {
          params: {
              symptoms: symptoms,
              affectedParts: affectedParts,
              plantType: plantType
          }
      });

      if (response.data && response.data.diseaseId) {
          const diseaseId = response.data.diseaseId;
          const diseaseResponse = await axios.get(`http://localhost:5001/get-plantdisease/${diseaseId}`);

          console.log(diseaseResponse.data);
          navigate(`/plantdisease/${diseaseId}`);
      } else {
          console.error('Disease ID not found in response');
      }
  } catch (error) {
      console.error('Error fetching data:', error);
  }
  };
  

  const handleReset = () => {
    setSymptoms([]);
    setSeverity('');
    setAffectedParts([]);
    setPlantType('');
    setAgeOfPlant('');
    setWeatherConditions('');
    setWateringFrequency('');
  };

  return (
    <div className="search-container">
      
      <h1>Plant Disease Diagnosis</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <h2>Symptoms</h2>
          <div className="checkbox-group">
            <Checkbox label="Wilting" value="wilting" checked={symptoms.includes('wilting')} onChange={handleSymptomChange} />
            <Checkbox label="Leaf Spots" value="leaf-spots" checked={symptoms.includes('leaf-spots')} onChange={handleSymptomChange} />
            <Checkbox label="Stunted Growth" value="stunted-growth" checked={symptoms.includes('stunted-growth')} onChange={handleSymptomChange} />
            <Checkbox label="Yellowing" value="yellowing" checked={symptoms.includes('yellowing')} onChange={handleSymptomChange} />
            <Checkbox label="Necrosis" value="necrosis" checked={symptoms.includes('necrosis')} onChange={handleSymptomChange} />
            <Checkbox label="Blight" value="blight" checked={symptoms.includes('blight')} onChange={handleSymptomChange} />
            <Checkbox label="Cankers" value="cankers" checked={symptoms.includes('cankers')} onChange={handleSymptomChange} />
            <Checkbox label="Chlorosis" value="chlorosis" checked={symptoms.includes('chlorosis')} onChange={handleSymptomChange} />
            <Checkbox label="Mold" value="mold" checked={symptoms.includes('mold')} onChange={handleSymptomChange} />
            <Checkbox label="Fungal Growth" value="fungal-growth" checked={symptoms.includes('fungal-growth')} onChange={handleSymptomChange} />
            <Checkbox label="Rust" value="rust" checked={symptoms.includes('rust')} onChange={handleSymptomChange} />
            <Checkbox label="Pustules" value="pustules" checked={symptoms.includes('pustules')} onChange={handleSymptomChange} />
            <Checkbox label="Clubbing" value="clubbing" checked={symptoms.includes('clubbing')} onChange={handleSymptomChange} />
            <Checkbox label="Anthracnose" value="anthracnose" checked={symptoms.includes('anthracnose')} onChange={handleSymptomChange} />
            <Checkbox label="Lesions" value="lesions" checked={symptoms.includes('lesions')} onChange={handleSymptomChange} />
          </div>
        </div>

        <RangeInput h2="Severity Scale" value={severity} onChange={setSeverity} />

        <div className="input-group">
          <h2>Affected Plant Parts</h2>
          <div className="checkbox-group">
            <Checkbox label="Leaves" value="leaves" checked={affectedParts.includes('leaves')} onChange={handleAffectedPartChange} />
            <Checkbox label="Stems" value="stems" checked={affectedParts.includes('stems')} onChange={handleAffectedPartChange} />
            <Checkbox label="Roots" value="roots" checked={affectedParts.includes('roots')} onChange={handleAffectedPartChange} />
            <Checkbox label="Fruits" value="fruits" checked={affectedParts.includes('fruits')} onChange={handleAffectedPartChange} />
            <Checkbox label="Buds" value="buds" checked={affectedParts.includes('buds')} onChange={handleAffectedPartChange} />
            {/* <Checkbox label="Bark" value="bark" checked={affectedParts.includes('bark')} onChange={handleAffectedPartChange} /> */}
            <Checkbox label="Seeds" value="seeds" checked={affectedParts.includes('seeds')} onChange={handleAffectedPartChange} />
          </div>
        </div>

        <SelectInput
            h2="Plant Type/Species"
            value={plantType}
            options={[
              'Tomato', 'Potato', 'Wheat', 'Rice', 'Maize',
              'Apple', 'Soybean','Cotton', 'Banana', 'Bean', 'Cabbage',
              'Pepper', 'Strawberry', 'Carrot','Spinach', 'Citrus', 'Orange',
              'Grapevine','Rose','Cucumber','Peach','Blueberry','Cherry',
              'Onion','Garlic','Zucchini','Pumpkin','Watermelon','Eggplant',
              'Cauliflower','Broccoli','Radish','Beetroot'
            ]}
            onChange={(e) => setPlantType(e.target.value)}
          />

          <SelectInput
            h2="Age of Plant"
            value={ageOfPlant}
            options={[
              '0-1 month', '1-3 months', '3-6 months', '6-12 months',
              '1-2 years', '2-5 years', '5+ years'
            ]}
            onChange={(e) => setAgeOfPlant(e.target.value)}
          />

          <SelectInput
            h2="Recent Weather Conditions"
            value={weatherConditions}
            options={['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Snowy']}
            onChange={(e) => setWeatherConditions(e.target.value)}
          />

          <SelectInput
            h2="Watering Frequency"
            value={wateringFrequency}
            options={['Daily', 'Weekly', 'Bi-weekly', 'Monthly']}
            onChange={(e) => setWateringFrequency(e.target.value)}
          />

        <div className="button-group">
          <button type="submit" className="search-btn">Search</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
