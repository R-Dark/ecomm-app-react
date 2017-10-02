import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "material-ui/AppBar";

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <header>
          <AppBar
            title="VR WORLD"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
            <NavLink exact to="/">
              HOME
            </NavLink>
            <NavLink to="/vive">VIVE</NavLink>
            <NavLink to="/oculus">OCULUS</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </AppBar>
        </header>
      </div>
    );
  }
}

export default Header;
