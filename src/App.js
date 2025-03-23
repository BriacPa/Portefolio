import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Logo from "./components/Logo"; // Import the Logo component
import './App.css';

const App = () => {
  return (
    <div className="BG">
      <Header />
      <div className="container mt-5">
        <About className="my-5" />
        <Projects className="my-5" />
        <Experience className="my-5" />
        <Education className="my-5" />
        <Skills className="my-5" />
        
        <Contact className="my-5" />
        <Logo />

      </div>
    </div>
  );
};

export default App;
