import React, { useState } from 'react';

const FAQPage = () => {
  // Define an array of questions and answers for plant diseases
  const faqs = [
    {
      question: 'What are common signs of plant diseases?',
      answer: 'Common signs include yellowing leaves, spots, wilting, stunted growth, and mold or mildew growth on leaves or stems.',
    },
    {
      question: 'How can I prevent plant diseases?',
      answer: 'To prevent plant diseases, use disease-resistant plants, provide proper spacing for air circulation, water at the base of plants, and remove diseased plant material.',
    },
    {
      question: 'What should I do if I notice a plant disease?',
      answer: 'Isolate the affected plant to prevent the spread of the disease. Remove and dispose of any diseased parts. Treat the plant with appropriate fungicides or bactericides if necessary.',
    },
    {
      question: 'What are some common plant diseases?',
      answer: 'Common plant diseases include powdery mildew, root rot, blight, rust, and leaf spot.',
    },
    {
      question: 'Can plant diseases spread to other plants?',
      answer: 'Yes, plant diseases can spread through contaminated soil, water, air, or insects. It\'s important to take quick action to prevent the spread.',
    },
    {
      question: 'How can I identify the specific disease affecting my plant?',
      answer: 'Look for specific symptoms such as leaf spots, wilting, or discoloration. Research or consult a gardening expert to accurately identify the disease.',
    },
    // Add more FAQs here
    {
      question: 'What are the most effective natural remedies for plant diseases?',
      answer: 'Natural remedies for plant diseases include neem oil for fungal and insect issues, baking soda solution for powdery mildew, and a mixture of water and vinegar to treat mold. Always test on a small area first.',
    },
    {
      question: 'How can I maintain healthy soil to prevent plant diseases?',
      answer: 'Maintain healthy soil by regularly adding organic matter such as compost or mulch, practicing crop rotation, and testing your soil\'s pH levels to ensure they are within the recommended range for your plants.',
    },
    {
      question: 'Are there any plants that are more resistant to diseases?',
      answer: 'Yes, some plants are naturally more resistant to diseases. Choose disease-resistant varieties when possible, such as certain types of tomatoes that resist blight and powdery mildew.',
    },
    {
      question: 'How can I avoid spreading plant diseases when gardening?',
      answer: 'Avoid spreading plant diseases by cleaning your gardening tools regularly, avoiding working in wet conditions, and not composting diseased plant material.',
    },
    {
      question: 'Can over-fertilizing cause plant diseases?',
      answer: 'Yes, over-fertilizing can lead to an excess of nutrients in the soil, which can stress plants and make them more susceptible to diseases. Follow recommended guidelines for fertilization.',
    },
    {
      question: 'How can I protect my plants from pests that carry diseases?',
      answer: 'Protect your plants by using physical barriers like nets, encouraging beneficial insects, and using organic pest control methods such as diatomaceous earth or insecticidal soap.',
    },
    {
      question: 'What role does proper watering play in preventing plant diseases?',
      answer: 'Proper watering helps prevent plant diseases by avoiding excess moisture on leaves and roots, which can lead to fungal and bacterial infections. Water plants at their base in the morning.',
    },
    {
      question: 'How can I recognize and manage root rot in my plants?',
      answer: 'Root rot can be recognized by wilting, yellowing, or dropping leaves, and dark, mushy roots. Manage it by improving drainage, watering less frequently, and using fungicides if necessary.',
    },
    {
      question: 'What should I do if my plant has a disease I can\'t identify?',
      answer: 'If you can\'t identify the disease, consult an expert such as a local nursery or extension service for help. You can also take photos and do research online to match symptoms to known diseases.',
    },
    {
      question: 'How can I safely dispose of diseased plant material?',
      answer: 'Safely dispose of diseased plant material by placing it in sealed bags and discarding it in the trash, rather than composting it. This prevents the disease from spreading further.',
    },
  ];

  // State to manage the currently open question
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Function to handle question click
  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
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
      <h1>Frequently Asked Questions about Plant Diseases</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item" onClick={() => handleQuestionClick(index)}>
            <div className="faq-question">{faq.question}</div>
            {openQuestionIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;