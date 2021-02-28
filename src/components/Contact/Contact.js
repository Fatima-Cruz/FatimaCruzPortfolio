import React, { Component } from "react";
import "./Contact.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.png";
import email from "../../assets/email.png";


export default class Contact extends React.Component {
  render() {
    return (
     <div className="contact">
          <h1> <bold>&#10085;</bold>	Contact Me</h1>
           <br />
        
            <div className="socialMedia">
            <a href="https://www.linkedin.com/in/fatiimacruz/">
            <img src={linkedin} alt="LinkedIn" />
            <p> LinkedIn</p>
            </a>
            </div>

            <div className="socialMedia">
            <a href="https://github.com/Fatima-Cruz">
            <img src={github} alt="Github" />
            <p> Github</p>
            </a>
            </div>


            <div className="socialMedia">
            <a href="mailto:f.atimacruz@yahoo.com">
            <img src={email} alt="Email" />
            <p> Email</p>
            </a>
            </div>
            <p id="email">f.atimacruz@yahoo.com</p>
     </div>
    );
  }
}

