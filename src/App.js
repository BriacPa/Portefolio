import React, { useState, useEffect } from "react";

import Header from "./components/computer/Header";
import About from "./components/computer/About";
import Experience from "./components/computer/Experience";
import VieAssociative from "./components/computer/VieAssociative";
import Education from "./components/computer/Education";
import Skills from "./components/computer/Skills";
import Projects from "./components/computer/Projects";
import Contact from "./components/computer/Contact";
import Logo from "./components/computer/Logo";

import HeaderM from "./components/mobile/Header";
import AboutM from "./components/mobile/About";
import ExperienceM from "./components/mobile/Experience";
import VieAssociativeM from "./components/mobile/VieAssociative";
import EducationM from "./components/mobile/Education";
import SkillsM from "./components/mobile/Skills";
import ProjectsM from "./components/mobile/Projects";
import ContactM from "./components/mobile/Contact";
import LogoM from "./components/mobile/Logo";

import './App.css';

const MobileView = () => {
  return (
    <>
      <HeaderM />
      <div className="containerM mt-5">
        <AboutM className="my-5" />
        <ProjectsM className="my-5" />
        <ExperienceM className="my-5" />
        <EducationM className="my-5" />
        <VieAssociativeM className="my-5" />
        <SkillsM className="my-5" />
        <ContactM className="my-5" />
        <LogoM />
      </div>
    </>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1300); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Header />
          <div className="container mt-5">
            <About className="my-5" />
			<Experience className="my-5" />
            <Projects className="my-5" />
            <Education className="my-5" />
			<VieAssociative className="my-5" />
            <Skills className="my-5" />
            <Contact className="my-5" />
            <Logo />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
