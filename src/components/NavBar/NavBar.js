import React, { Component } from "react";
import "../NavBar/NavBar.css";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        {/* <label for="toggle">&#9776;</label> */}
        <div className="navbarOptions">
          <a href="#">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>

              About
            </Link>
          </a>


          <a href="#">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>

              Projects
            </Link>
          </a>

          <a href="#">
          <Link
            activeClass="active"
            to="lp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>

            {" "}
           <strong>   &#10084;</strong>
          </Link>
          </a>


          <a href="#">
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>

              Resume
            </Link>
            </a>

          <a href="#">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                
              Contact
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
