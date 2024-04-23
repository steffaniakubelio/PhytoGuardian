import React from 'react';

const GardeningTips = () => {
  const tips = [
    {
      title: 'Soil Preparation',
      content: 'Test your soil\'s pH and nutrient levels to know if any amendments are needed. Add organic matter such as compost or well-rotted manure to improve soil fertility and structure.',
      icon: '🌱', 
    },
    {
      title: 'Choose the Right Plants',
      content: 'Select plants that are suitable for your climate and soil type. Consider the amount of sunlight your garden receives and choose plants that match those conditions.',
      icon: '🌻',
    },
    {
      title: 'Watering',
      content: 'Water deeply and less frequently to encourage deep root growth. Water in the early morning or late evening to minimize evaporation. Use mulches to help retain soil moisture.',
      icon: '💧',
    },
    {
      title: 'Weeding',
      content: 'Keep on top of weeding to prevent competition for nutrients and water. Mulching can help suppress weed growth.',
      icon: '🧹',
    },
    {
      title: 'Harvesting',
      content: 'Harvest your fruits and vegetables at the right time to ensure the best flavor and quality. Avoid over-harvesting to maintain healthy plants.',
      icon: '🥕',
    },
    {
      title: 'Crop Rotation',
      content: 'Rotate your crops each year to prevent soil depletion and reduce the risk of soil-borne diseases. Plant different types of crops in each area of your garden.',
      icon: '🌾',
    },
    {
      title: 'Tools Maintenance',
      content: 'Clean and maintain your gardening tools regularly to prevent the spread of diseases and extend their lifespan. Sharpen pruners and other cutting tools for precise cuts.',
      icon: '🔧',
    },
    {
      title: 'Garden Planning',
      content: 'Plan your garden layout carefully to maximize space and sunlight exposure. Consider companion planting for natural pest control and improved plant health.',
      icon: '📝',
    },
  ];

  return (
    <div className="gardening-tips-container">
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
      
      <h1>Gardening Tips</h1>
      <ul className="tips-grid">
        {tips.map((tip, index) => (
          <li key={index} className="tip-item">
            <h2 className="tip-title">
              {tip.icon} {tip.title}
            </h2>
            <p>{tip.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GardeningTips;
