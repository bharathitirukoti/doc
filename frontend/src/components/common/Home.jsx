import React from 'react';
import { Link } from 'react-router-dom';
import p3 from '../../images/p3.webp'; // Adjust path if needed

const Home = () => (
  <div className="home-container" style={{
    background: '#bccbcb',
    minHeight: '100vh',
    position: 'relative',
    fontFamily: 'sans-serif'
  }}>
    {/* Left side: Image */}
    <div className="left-side">
      <img src={p3} alt="Landing" style={{ width: '400px', borderRadius: '10px' }} />
    </div>
    {/* Right side: Text and Button */}
    <div className="right-side">
      <div>
        <h2 style={{ color: '#f7b500', fontWeight: 'bold', marginBottom: '30px' }}>BOOK A DOCTOR</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#222' }}>
          Effortlessly schedule your doctor<br />
          appointments with just a few clicks,<br />
          putting your health in your hands.
        </p>
        <button style={{
          background: '#f7b500',
          color: '#fff',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Book your Doctor
        </button>
      </div>
    </div>
    {/* Top right: Login/Register */}
    <div style={{
      position: 'absolute',
      top: 30,
      right: 50,
      display: 'flex',
      gap: '20px'
    }}>
      <button style={{
        background: '#f7b500',
        color: '#fff',
        border: 'none',
        padding: '10px 24px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Login
      </button>
      <Link to="/register">
        <button
          style={{
            background: '#f7b500',
            color: '#fff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </Link>
    </div>
  </div>
);

export default Home;