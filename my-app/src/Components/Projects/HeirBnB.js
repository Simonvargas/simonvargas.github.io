import React, { useState, useEffect, useRef } from "react";

const images = [
  `${process.env.PUBLIC_URL}/images/heirbnb1.png`,
  `${process.env.PUBLIC_URL}/images/heirbnb2.png`,
  `${process.env.PUBLIC_URL}/images/heirbnb3.png`,
  `${process.env.PUBLIC_URL}/images/heirbnb4.png`,
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
    <div className="projectContent">
      <div>
      <img src={`${process.env.PUBLIC_URL}/images/heirbnb1.png`}></img>
      </div>
      <p>Heirbnb</p>
      <div>
      </div>
    </div>
  );
};

export default HeirBnB;
