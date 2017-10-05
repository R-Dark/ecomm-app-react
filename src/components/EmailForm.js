import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import SignupConfirm from "./SignupConfirm";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "NEW_SIGNUP",
      newSignup: {
        firstName: this.state.firstName,
        email: this.state.email
      }
    });
    this.setState({ firstName: "", email: "" });
  };
  handleNameTextChange = event => {
    this.setState({ firstName: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Email Sign-Up</title>
        </Helmet>
        <div>
          <h2>Sign-Up for our newsletter!</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              id="text-field-two"
              type="text"
              onChange={this.handleNameTextChange}
              value={this.state.firstName}
              placeholder="First Name"
            />
          </div>
          <div>
            <TextField
              id="text-field-two"
              type="text"
              onChange={this.handleEmailChange}
              value={this.state.email}
              placeholder="Email Address"
            />
          </div>
          <div className="button-div">
            <RaisedButton type="submit" primary="true">
              Sign-Up!
            </RaisedButton>
          </div>
        </form>
        <div>
          <SignupConfirm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(EmailForm);
