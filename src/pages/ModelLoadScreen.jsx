import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderAnimation from '../assets/loader.json'; 

export default function ModelLoadScreen({ modelName }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    fontFamily: 'sans-serif',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '20px',
  };

  const gridWrapperStyle = {
    width: '100%',
    maxWidth: '600px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '8px',
    fontSize: '12px',
  };

  const boxStyle = (filled) => ({
    height: '24px',
    borderRadius: '6px',
    textAlign: 'center',
    lineHeight: '24px',
    backgroundColor: filled ? '#66ff99' : '#2c2c2c',
    color: filled ? '#000000' : '#777777',
    transition: 'all 0.2s ease-in-out',
  });

  const successText = {
    marginTop: '30px',
    fontSize: '18px',
    color: '#80ffaa',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{`Loading ${modelName}...`}</h2>

      {progress < 100 && (
        <Player
          autoplay
          loop
          src={loaderAnimation}
          style={{ height: '150px', width: '150px', marginBottom: '20px' }}
        />
      )}

      <div style={gridWrapperStyle}>
        <div style={gridStyle}>
          {[...Array(100)].map((_, i) => (
            <div key={i} style={boxStyle(i < progress)}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {progress === 100 && (
        <p style={successText}>✅ Model Loaded Successfully!</p>
      )}
    </div>
  );
}