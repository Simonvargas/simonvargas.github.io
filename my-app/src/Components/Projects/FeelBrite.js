import React, { useState, useEffect, useRef } from "react";

const images = [
  "/images/feelbrite1.png",
  "/images/feelbrite2.png",
  "/images/feelbrite3.png",
  "/images/feelbrite4.png",
  "/images/feelbrite5.png",
];

const FeelBrite = () => {
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
      <h3>FeelBrite</h3>
      <p>An event management platform that allows consumers to browse through a selection of categories of exercise related events and allows the user to sign up, create events, register for events, and bookmark events.</p>
      <li>Browse through fitness events happening nearby in your area
      </li>
      <li>Register or bookmark classes to your own personal profile
      </li>

      <img
        className="projectImg"
        src={images[currentImageIndex]}
        alt="FeelBrite Project"
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

export default FeelBrite;

