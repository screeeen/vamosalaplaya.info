import React from 'react';

export const TituloFechas = () => {
  const animatedStyle = {
    background:
      'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
    backgroundSize: '400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'rainbow 4s linear infinite',
  };

  return (
    <h2>
      6th, 7th, 8th & 9th <span style={animatedStyle}>August</span> 2026
    </h2>
  );
};
