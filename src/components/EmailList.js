import React, { Component } from "react";
import EmailForm from "./EmailForm";
import SignupConfirm from "./SignupConfirm";
class EmailPage extends Component {
  render() {
    return (
      <div>
        <div className="container" id="email-div">
          <EmailForm />
        </div>
      </div>
    );
  }
}

export default EmailPage;
