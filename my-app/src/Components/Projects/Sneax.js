import React, { useState, useEffect, useRef } from "react";

const images = [
  "/images/sneax1.png",
  "/images/sneax2.png",
  "/images/sneax3.png",
  "/images/sneax4.png",
  "/images/sneax5.png",
];

const Sneax = () => {
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
      <h3>Sneax</h3>
      <p>Details about Sneax project...</p>
      <img
        className="projectImg"
        src={images[currentImageIndex]}
        alt="Sneax Project"
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

export default Sneax;
