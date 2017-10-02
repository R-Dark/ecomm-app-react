import React, { Component } from "react";
import Helmet from "react-helmet";

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>VR Tech Blog</title>
        </Helmet>
        <h1>Welcome to our blog.</h1>

        <p>
          Here is where we keep you up to date on all of the latest developments
          in the fast changing world of virtual reality and augmented reality.
        </p>
      </div>
    );
  }
}

export default Blog;
