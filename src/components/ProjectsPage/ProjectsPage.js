import React, { Component } from "react";
import "../ProjectsPage/ProjectsPage.css";
import back from "../../assets/back.svg";


export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
           <div class="goBack">
      <a href="/">
        <img src={back} alt="back arrow" />
        <p>Go back to Home Page</p></a>
    </div>

        <h1> Projects Should Go Here</h1>
      </div>
    );
  }
}

