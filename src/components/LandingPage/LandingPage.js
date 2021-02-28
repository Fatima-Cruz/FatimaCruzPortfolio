import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-scroll";
import fatima from "../../assets/fatima.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div id="lp" className="landing-page">
        <div className="Nav">
        <h1> <bold>&#10085;</bold> Fatima Cruz</h1>
        <ul>
          <li> 
        <button class="landing-page-options">
          
            <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            About Me
          </Link>
        </button>
        </li>


        <li> 
        <button class="landing-page-options">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            	Projects 
          </Link>
        </button>
        </li>

        <li> 
        <button class="landing-page-options">
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            	Resume
          </Link>
        </button>
        </li>


        <li> 
        <button class="landing-page-options">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </Link>
        </button>
        </li>

        </ul>
        </div>

        <div className="myPhoto">
          <img src={fatima} alt="Fatima" />
        </div>
      </div>
    );
  }
}

export default LandingPage;
