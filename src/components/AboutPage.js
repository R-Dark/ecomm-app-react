import React, { Component } from "react";
import Helmet from "react-helmet";

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <h1>We are best company. Very trustworthy. Yes.</h1>
      </div>
    );
  }
}

export default Blog;
