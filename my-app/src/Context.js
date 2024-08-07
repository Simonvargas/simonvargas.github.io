import React, { createContext, useRef } from 'react';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ homeRef, aboutMeRef, projectsRef, technologiesRef, contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };