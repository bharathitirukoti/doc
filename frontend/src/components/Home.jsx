import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from '../images/p3.webp';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#bdcccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' // Add this for absolute positioning
    }}>
      {/* Top left "BOOK A DOCTOR" */}
      <h1 style={{
        position: 'absolute',
        top: '30px',
        left: '40px',
        color: '#FFC107',
        fontWeight: 'bold',
        fontSize: '2.2rem',
        margin: 0,
        zIndex: 10
      }}>
        BOOK A DOCTOR
      </h1>
      <div style={{
        width: '90%',
        height: '80vh',
        background: '#bdcccc',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px'
      }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={photo1} alt="Doctors" style={{ height: '400px' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginBottom: '40px' }}>
            <button
              style={{
                background: '#FFC107',
                color: '#fff',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '18px',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              style={{
                background: '#FFC107',
                color: '#fff',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '18px',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
          <p style={{ fontSize: '20px', marginBottom: '40px' }}>
            Effortlessly schedule your doctor appointments with just a few clicks,<br />
            putting your health in your hands.
          </p>
          <button
            style={{
              background: '#FFC107',
              color: '#fff',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '18px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/userhome')}
          >
            Book your Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;