import React from "react";
import Splash from './Components/Splash/Splash.js'
import Header from './Components/Header/Header.js'
import Introduction from "./Components/Introduction/Introduction.js";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import Technologies from "./Components/Technologies/Technologies.js";
import { ScrollProvider } from "./Context.js";
import "./App.css";


function App() {
  return (
    <div className="App">
      <ScrollProvider>
        <Header/>
      <Splash />
      <Introduction />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
