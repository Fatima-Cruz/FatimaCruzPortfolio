import React, { Component } from "react";
import "./Resume.css";
import resume from "../../assets/resume.png";

class Resume extends React.Component {
  render() {
    return (
     <div className="resume">
         <h1> <bold>&#10085;</bold>	My Resume</h1>
           <br />
           <a href="https://docs.google.com/document/d/1Waaf6tpxewBfuSQfF28-sQDewyIiIK9SoTVdQqDOgfA/edit?usp=sharing">
       <img class="resumePic" src={resume} alt="Fatima Cruz Resume" />
       </a>
     </div>
    );
  }
}

export default Resume;
