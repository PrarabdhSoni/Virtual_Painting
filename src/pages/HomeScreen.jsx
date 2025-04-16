import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontFamily: 'sans-serif',
  };

  const titleStyle = {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '16px',
    marginBottom: '16px',
    border: 'none',
    cursor: 'pointer',
    color: '#ffffff',
    transition: 'background-color 0.2s ease',
  };

  const greenBtn = {
    ...buttonStyle,
    backgroundColor: '#28a745',
  };

  const blueBtn = {
    ...buttonStyle,
    backgroundColor: '#007bff',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Paint By Sign</h1>
      <button
        style={{...greenBtn, minWidth: '200px'}}
        onClick={() => navigate('/load-model-main')}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
      >
        Load
      </button>
      <button
        style={{...blueBtn, minWidth: '200px'}}
        onClick={() => navigate('/load-model-a')}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Load Virtual Painter
      </button>
            <button
        style={{...blueBtn, minWidth: '200px'}}
        onClick={() => navigate('/load-model-b')}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Load ASL Detection
      </button>
    </div>
  );
}
