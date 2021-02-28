import React, { Component } from "react";
import "../Footer/Footer.css";
import heart from "../../assets/heart.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="footer">
      <img class="footer-img" src={heart} />
      <h3> Fatima Cruz &#169; 2021</h3>
      </div>
    );
  }
}

export default NavBar;
