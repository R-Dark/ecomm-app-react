import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BottomNavigationExampleSimple from "./BottomBar";

class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <footer>
          <BottomNavigationExampleSimple />
        </footer>
      </div>
    );
  }
}

export default Footer;
