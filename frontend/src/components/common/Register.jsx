import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import p2 from '../../images/p2.png';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'user'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Registration logic here
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
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            maxWidth: '400px',
            marginRight: '40px',
            background: '#fff',
            borderRadius: '12px',
            padding: '32px 24px',
            boxShadow: '0 0 8px rgba(0,0,0,0.07)'
          }}
        >
          <h2 style={{ marginBottom: '24px', color: '#FFC107', fontWeight: 'bold', textAlign: 'center' }}>
            Sign up to your account
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
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
              padding: '10px',
              marginBottom: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <div style={{ marginBottom: '16px' }}>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={form.role === 'admin'}
                onChange={handleChange}
                style={{ marginRight: '8px' }}
              />
              Admin
            </label>
            <label style={{ marginLeft: '24px' }}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={form.role === 'user'}
                onChange={handleChange}
                style={{ marginRight: '8px' }}
              />
              User
            </label>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#FFC107',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            Register
          </button>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            Have an account? <Link to="/login" style={{ color: '#FFC107', fontWeight: 'bold' }}>Login here</Link>
          </div>
        </form>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={p2} alt="Register Illustration" style={{ height: '320px' }} />
        </div>
      </div>
    </div>
  );
};

export default Register;
