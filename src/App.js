import React from "react";
import Acceuil from "./pages/Acceuil";
import Skills from './pages/Skills'
import About from "./pages/About";
import Project from "./pages/project";
import Contact from "./pages/Contact";
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App">

      <Element name="acceuil" className="element">
        <Acceuil />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="project" className="element">
        <Project />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}


export default App;
