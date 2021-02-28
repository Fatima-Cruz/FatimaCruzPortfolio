import React, { Component } from "react";
import "../src/App.css";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/NavBar/NavBar";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";
import ProjectsPage from "../src/components/ProjectsPage/ProjectsPage";
import Resume from "./components/Resume/Resume";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <ProjectsPage />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
