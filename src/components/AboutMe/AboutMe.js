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
         I am a fresh, new face to the ever-expanding world of Web Development. During my time as a Road to Hire Tech Fellow, I've gotten my first-hand experience with a number of programming languages and what makes them tick. Front-end, back-end, APIs, E-commerce, Hackathons, you name it. I've had my fair share of experience in all.

On my to-do list, you would find that I plan to excel my knowledge in UI/UX design and dive deep into the psychology behind styling attractive websites according to human brains. I would also love to perfect my CSS skills to give me the freedom to create anything I set my mind to in a semantic and organized fashion. I also dabble a bit in video editing, and in my future free time will pick up again on that old hobby. Creative writing wouldn't be too bad to improve on, either.

 I'd say I have an eye for design and there's no doubt that I am a right-brained type of gal. I love being creative and adding my personal touches wherever I see fit. Therefore a position working with front-end, UI/UX design, writing, content, graphics and anything artistic would be the position for me.
        </p>
      </section>
      </div>
    );
  }
}

export default AboutMe;
