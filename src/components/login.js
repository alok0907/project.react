import React, { Component } from "react";
import Heading from "./heading";
import { Footer } from "./footer";
import LoginPresentation from "./loginpresentation";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  //# To handle the Email Input
  handleEmail(e) {
    this.setState(() => (this.state.email = e.target.value));
  }
  //# To handle the Password Input
  handlePassword(e) {
    this.setState(() => (this.state.password = e.target.value));
  }
  //# To handle Submit and Alert Email and Password inputs
  handleSubmit(e) {
    this.setState(() => {
      alert(
        "Email : " + this.state.email + "\nPassword : " + this.state.password
      );
    });
  }

  render() {
    return (
      <>
        <Heading title="Login" />
        <LoginPresentation
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          password={this.state.password}
        />
        <Footer />

        {/* To log to console the output of Entered Email and Password */}
        {console.log(this.state.email, this.state.password)}
      </>
    );
  }
}
