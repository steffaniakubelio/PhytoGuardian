import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <h2>Welcome to Plant Care</h2>
      <form>
        <input type="email" placeholder="Email" name="email" required />
        <br />
        <input type="password" placeholder="Password" name="password" required />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
    </div>
  );
};

export default Login;
