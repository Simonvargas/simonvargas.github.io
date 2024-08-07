import React, { useState, useEffect, useRef } from "react";

const images = [
    "/images/chimera1.png", 
    "/images/chimera2.png", 
    "/images/chimera3.png", 
    "/images/chimera4.png", 
    "/images/chimera5.png", 
    "/images/chimera6.png", 
  ];
const Chimera = () => {
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
      <h3>Chimera</h3>
      <p>A crowd funding platform that allows people to raise money for events ranging from life events such as celebrations and graduations to challenging circumstances like accidents and illnesses.</p>
      <li>Donate to a project or cause of your choice</li>
     <li> Create a project or cause you would like to receive funding for</li>
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

export default Chimera;