import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import auth from "../services/authService";
import Utils from "../utils/utils";
import { Logo } from "./common";

class RegisterForm extends Component {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  handleSubmit = async (e) => {
    // This doesn't actually work yet. I had a crack but need to keep working on it.

    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await auth.signUp(name, email, password);

    window.location = "/login";
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <div className="centered-page-content">
          <h1>Register for</h1>
          <Logo />
          <sl-form className="form-signup dark-theme">
            <div className="input-group">
              <sl-input
                id="name"
                name="name"
                type="name"
                placeholder="Name"
                required
              ></sl-input>
            </div>
            <div className="input-group">
              <sl-input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              ></sl-input>
            </div>
            <div className="input-group">
              <sl-input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                toggle-password
              ></sl-input>
            </div>
            <Link
              className="submit-btn go-button small"
              type="primary"
              onClick={this.handleSubmit}
            >
              <span>Sign Up</span>
            </Link>
            <p>
              Have an account? <Link to="/login">Log In</Link>
            </p>
          </sl-form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
