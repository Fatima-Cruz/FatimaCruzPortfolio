import React, { Component } from "react";
import "../AboutMe/AboutMe.css";
import AboutMePic from "../../assets/AboutMePic.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme">
      <h1> <bold>&#10085;</bold> About Me</h1>
      <section>
      <img class="aboutMePic" src={AboutMePic} alt="AboutMe" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      </div>
    );
  }
}

export default AboutMe;
