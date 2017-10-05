import React, { Component } from "react";
import "../styles/App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Layout from "./Layout/Layout";
import OculusProducts from "./OculusProducts";
import ViveProducts from "./ViveProducts";
import Blog from "./Blog";
import EmailPage from "./EmailList";
import AboutPage from "./AboutPage";
import SignIn from "./SignIn";

injectTapEventPlugin();
class App extends Component {
  render() {
    if (!this.props.user.username) {
      return <SignIn />;
    }
    return (
      <MuiThemeProvider>
        <Router>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/vive" component={ViveProducts} />
            <Route path="/oculus" component={OculusProducts} />
            <Route path="/blog" component={Blog} />
            <Route path="/email" component={EmailPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/sign-in" component={SignIn} />
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
