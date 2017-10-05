import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";

function handleLeftIconTouch() {
  alert("A function I haven't figured out how to use yet!");
}

function handleTitleTouch() {
  alert("Another one");
}

const styles = {
  title: {
    cursor: "pointer"
  }
};

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <header>
          <AppBar
            title="VR WORLD"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={handleLeftIconTouch}
            onTitleTouchTap={handleTitleTouch}
            title={<span style={styles.title}>VR WORLD</span>}
            style={{
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#1976D2"
            }}
          >
            <NavLink exact to="/">
              HOME
            </NavLink>
            <NavLink to="/vive">VIVE</NavLink>
            <NavLink to="/oculus">OCULUS</NavLink>
            <NavLink to="/email">EMAIL</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </AppBar>
        </header>
      </div>
    );
  }
}

export default Header;
