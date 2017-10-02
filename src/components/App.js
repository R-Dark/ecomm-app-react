import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout/Layout";
import OculusProducts from "./OculusProducts";
import ViveProducts from "./ViveProducts";
import Blog from "./Blog";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/vive" component={ViveProducts} />
            <Route path="/oculus" component={OculusProducts} />
            <Route path="/blog" component={Blog} />
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
