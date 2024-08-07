import React, { useState, useEffect, useRef } from "react";

const images = [
  "/images/heirbnb1.png",
  "/images/heirbnb2.png",
  "/images/heirbnb3.png",
  "/images/heirbnb4.png",
];

const HeirBnB = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startImageRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startImageRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
  };

  const handleNumberClick = (index) => {
    setCurrentImageIndex(index);
    startImageRotation(); // Restart the timer when a number is clicked
  };

  return (
    <div>
      <h3>HeirBnB</h3>
      <p>
        A simple 1 full crud application showcasing AWS & Google Maps Api
        Integration.
      </p>
      <li>AWS to upload photo of your home</li>
      <li> Google Maps api implemented to see where a home is located</li>
      <li>Functional search bar</li>
      <img
        className="projectImg"
        src={images[currentImageIndex]}
        alt="HeirBnB Project"
      />
      <div className="numberBar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`number ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleNumberClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeirBnB;
