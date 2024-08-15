import React, { createContext, useState, useEffect } from 'react';

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "night") {
      setIsNightMode(true);
      document.body.classList.add("night-mode");
    }
  }, []);

  const toggleNightMode = () => {
    setIsNightMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("night-mode");
        localStorage.setItem("theme", "night");
      } else {
        document.body.classList.remove("night-mode");
        localStorage.setItem("theme", "day");
      }
      return newMode;
    });
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
