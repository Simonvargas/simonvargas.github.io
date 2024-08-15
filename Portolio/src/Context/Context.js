import React, { useEffect, createContext, useRef, useState } from 'react';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsRefMobile = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: 'home' },
        { ref: aboutMeRef, id: 'aboutMe' },
        { ref: projectsRef, id: 'projects' },
        { ref: projectsRefMobile, id: 'projectsMobile' },
        { ref: technologiesRef, id: 'technologies' },
        { ref: contactRef, id: 'contact' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const sectionElement = section.ref.current;
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ homeRef, aboutMeRef, projectsRef, projectsRefMobile, technologiesRef, contactRef, activeLink, setActiveLink }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };