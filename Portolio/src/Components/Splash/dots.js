import React, { useEffect } from 'react';
// import './FloatingDots.css'; // Import the CSS file

const FloatingDots = () => {
  useEffect(() => {
    const container = document.querySelector('.floating-dots-container');
    const numDots = 30; // Number of dots

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${Math.random() * 8 + 4}s`; // Randomize duration
      dot.style.animationDelay = `${Math.random() * 5}s`; // Randomize delay
      container.appendChild(dot);
    }
  }, []);

  return <div className="floating-dots-container"></div>;
};

export default FloatingDots;