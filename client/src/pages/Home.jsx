// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure this import path is correct

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Home</h1>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
}
