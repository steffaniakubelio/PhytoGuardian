import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const ContactPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset form error for the field being edited
    setFormErrors({
      ...formErrors,
      [e.target.name]: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = false;
    // Check for missing fields
    if (!formData.name) {
      setFormErrors({
        ...formErrors,
        name: true
      });
      errors = true;
    }
    if (!formData.email) {
      setFormErrors({
        ...formErrors,
        email: true
      });
      errors = true;
    }
    if (!formData.message) {
      setFormErrors({
        ...formErrors,
        message: true
      });
      errors = true;
    }

    if (!errors) {
      try {
        // Send POST request using Axios
        const response = await axios.post('http://localhost:5001/contact', formData);
    
        if (response.status === 201) {
          setShowAlert(true); // Show alert on successful submission
          // Reset form data to initial state
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          // Handle error response
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  return (
    <div className="contact-container">
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/home" style={linkStyle}>Home</a>
          </li>
          <li style={liStyle}>
            <a href="/gardening-tips" style={linkStyle}>Gardening Tips</a>
          </li>
          <li style={liStyle}>
            <a href="/faq" style={linkStyle}>F&Q</a>
          </li>
          <li style={liStyle}>
            <a href="/contact" style={linkStyle}>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="cc">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        {formErrors.name && <p style={{ color: 'red' }}>Please enter your name</p>}
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        {formErrors.email && <p style={{ color: 'red' }}>Please enter your email</p>}
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={{ height: '100px' }}></textarea>
{formErrors.message && <p style={{ color: 'red' }}>Please enter your message</p>}
        <button type="submit">Send Message</button>
      </form>
      {showAlert && (
        <div className="alert">
          <span className="close" onClick={() => setShowAlert(false)}>&times;</span>
          Message submitted successfully!
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactPage;

// Inline CSS styles for navigation
const navStyle = {
  backgroundColor: '#457427',
  padding: '10px 20px',
  borderRadius: '8px',
  marginBottom: '20px'
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'right'
};

const liStyle = {
  display: 'inline-block',
  marginRight: '30px'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold'
};
