import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import p3 from '../../images/photo1.png';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Login logic here
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#bdcccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '900px',
        background: '#bdcccc',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 0 16px rgba(0,0,0,0.05)',
        padding: '40px'
      }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={p3} alt="Login Illustration" style={{ height: '320px' }} />
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            maxWidth: '400px',
            marginLeft: '40px',
            background: '#fff',
            borderRadius: '12px',
            padding: '32px 24px',
            boxShadow: '0 0 8px rgba(0,0,0,0.07)'
          }}
        >
          <h2 style={{
            marginBottom: '24px',
            color: '#333',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '2rem'
          }}>
            Sign in to your account
          </h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#FFC107',
              color: '#fff',
              border: 'none',
              padding: '14px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            Let's Enter
          </button>
          <div style={{ marginTop: '18px', textAlign: 'center' }}>
            Don't have an account? <Link to="/register" style={{ color: '#FFC107', fontWeight: 'bold' }}>Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;