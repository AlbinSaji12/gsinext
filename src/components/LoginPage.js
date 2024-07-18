// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import googleIcon from '../assets/google-icon.png'; // Make sure to add this image to your assets

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="logo">GSI NEXT LOGO</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="google-login">
            <span>Login with Google</span>
            <img src={googleIcon} alt="Google" className="google-icon" />
          </div>
          <button type="submit" className="sign-in-btn">
            SIGN IN →
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;