import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa'; // Import required icons
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.password === '') {
      setFormError('Please fill in all fields.'); // Set error message
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/signup', formData);
      localStorage.setItem('token', response.data.token);
      // Redirect to input page upon successful signup
      window.location.href = '/home';
    } catch (error) {
      if (error.response.status === 409 && error.response.data.includes('duplicate key error')) {
        // User with the same email already exists
        setFormError('User with this email already exists.');
      } else {
        // Other errors
        setFormError('User with this email already exists.');
        console.error('Signup failed:', error.response.data);
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-heading">PhytoGuardian</h2>
        {formError && <p className="error-message">{formError}</p>} {/* Display error message if formError is true */}
        <div className="cont">
          <div className="form-group">
            <FaUserAlt className="icon" /> {/* Add icon */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderRadius: '20px' }}
            />
          </div>
          <div className="form-group">
            <FaUserAlt className="icon" /> {/* Add icon */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderRadius: '20px' }}
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" /> {/* Add icon */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <FaLock className="icon" /> {/* Add icon */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-signup"
        >
          Sign Up
        </button>
        <div className="signup-link">
          <span>Already have an account?</span>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
