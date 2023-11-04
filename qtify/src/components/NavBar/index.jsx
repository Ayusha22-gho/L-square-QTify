import React, { Component } from "react";
import "./NavBar.css";
import Search from "../Search";
import Button from "../Button";
export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src = 'logo.png' alt = "qtify" width = {"90px"} height = {100}/>
        <Search />
        <Button>Give Feedback</Button>
      </div>
    );
  }
}

export default NavBar;
