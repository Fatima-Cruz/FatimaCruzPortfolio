import React, { Component } from "react";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    
    </div>
  );
}

export default HomePage;
