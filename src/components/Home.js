import React, { Component } from "react";
import Helmet from "react-helmet";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import RaisedButtonExampleSimple from "./Button";
import PaperExampleCircle from "./CircleHome";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>Welcome to VR WORLD!</title>
        </Helmet>
        <PaperExampleCircle />
      </div>
    );
  }
}

export default Home;
