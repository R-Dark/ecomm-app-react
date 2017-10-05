import React, { Component } from "react";
import { connect } from "react-redux";

class SignupConfirm extends Component {
  render() {
    return (
      <div>
        {this.props.newSignup.map(newSignup => {
          return (
            <div key={newSignup.firstName}>
              {newSignup.firstName}
              <h3>Thanks for signing up!</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({ state });
  return {
    newSignup: state.newSignup
  };
};

export default connect(mapStateToProps)(SignupConfirm);
