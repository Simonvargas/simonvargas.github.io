import React from "react";
import Splash from './Components/Splash/Splash.js'
import Header from './Components/Header/Header.js'
import Introduction from "./Components/Introduction/Introduction.js";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import Technologies from "./Components/Technologies/Technologies.js";
import Sidebar from "./Components/Header/Sidebar.js";
import NavBar from "./Components/Header/NavBar.js";
import { ScrollProvider } from "./Context/Context.js";
import New from "./Components/Projects/new.js";
import "./App.css";


function App() {
  return (
    <div className="App">
       
      <ScrollProvider>
        <Header/>
        <NavBar />
        <Sidebar/>
      <Splash />
      <Introduction />
      <Projects />
      <New />
      <Technologies />
      <Contact />
      <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
