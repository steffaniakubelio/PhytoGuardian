import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password. Please try again.');
      } else {
        console.error('Login failed:', error);
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>PhytoGuardian</h1>
        <div className="input-box">
          <FaUserAlt className='icon' />
          <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className='input-box'>
          <FaLock className='icon' />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className='remember-forgotten'>
          <label><input type="checkbox" /> Remember me</label>
        </div>
        <div className="button-container">
          <button type="submit" className='submit'>Login</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <div className="centered-links">
        <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
      </div>
    </div>
  );  
};

export default Login;
