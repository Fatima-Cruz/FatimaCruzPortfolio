import React, { Component } from "react";
import "../Projects/Projects.css";
import floralborder from "../../assets/floralborder.png";
import {
  Link
} from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
          
          <h1><bold>&#10085;</bold> My Projects</h1>
           <br />
           
         
          <img  className="projectFloralBorder" src={floralborder} alt="Floral Border" />
           <Link className="projects-button" to="/ProjectsPage"> See my Work </Link>
          
   
      </div>
    );
  }
}
export default Projects;
