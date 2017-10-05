import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ message: "" });

    if (this.state.username === "rob" && this.state.password === "123") {
      this.props.dispatch({
        type: "AUTHENTICATE",
        user: {
          id: 1,
          username: "rob"
        }
      });
    } else if (this.state.username === "joe" && this.state.password === "321") {
      this.props.dispatch({
        type: "AUTHENTICATE",
        user: {
          id: 2,
          username: "joe"
        }
      });
    } else {
      this.setState({ message: "Incorrect Username or Password" });
    }
  };
  render() {
    return (
      <MuiThemeProvider>
        <div className="signIn-div">
          <Helmet>
            <title>Sign-In Page</title>
          </Helmet>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2>Sign-In</h2>
            </div>
            <div>
              <TextField
                id="signin1"
                type="text"
                onChange={event =>
                  this.setState({ username: event.target.value })}
                value={this.state.username}
                placeholder="Username"
              />
            </div>
            <div>
              <TextField
                id="signin2"
                type="password"
                onChange={event =>
                  this.setState({ password: event.target.value })}
                value={this.state.password}
                placeholder="Password"
              />
            </div>
            <div className="button-div">
              <RaisedButton type="submit" primary={true}>
                Sign-Up!
              </RaisedButton>
            </div>
            {this.state.message && (
              <div className="error-message">{this.state.message}</div>
            )}
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(SignIn);
