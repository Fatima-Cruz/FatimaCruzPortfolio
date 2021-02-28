import React, { Component } from "react";
import "../Projects/Projects.css";
import floralborder from "../../assets/floralborder.png";
// import "../components/ProjectsPage/ProjectsPage.js";


class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
          
          <h1><bold>&#10085;</bold> My Projects</h1>
           <br />
           
          <img  className="projectFloralBorder" src={floralborder} alt="Floral Border" />
      
           

       <a href="/ProjectsPage">
       <button class="projects-button"> View my Projects
       </button> 
       </a>
   
      </div>
    );
  }
}
//<ProjectsPage />
export default Projects;
