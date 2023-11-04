import React, { Component } from "react";
import "./NavBar.css";
import Search from "../Search";
import Button from "../Button";
export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="icon">
          <img src="logo.png" alt="qtify" width={"60px"} height={24} />
          <img src="icon.png" alt="icon" className="music-icon" />
        </div>

        <Search />
        <Button>Give Feedback</Button>
      </div>
    );
  }
}

export default NavBar;
