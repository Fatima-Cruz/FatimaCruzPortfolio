import React, { Component } from "react";
import "../src/App.css";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/NavBar/NavBar";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";
import HomePage from "../src/components/HomePage/HomePage"
import ProjectsPage from "../src/components/ProjectsPage/ProjectsPage";
import Resume from "./components/Resume/Resume";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ProjectsPage" component={ProjectsPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
