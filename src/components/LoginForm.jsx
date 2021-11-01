import React, { Component } from "react";
import auth from "../services/authService";
import { Redirect, Link } from "react-router-dom";
import { Logo } from "./common";

class LoginForm extends Component {
  state = {
    data: { email: "", password: "" },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const response = await auth.login(email, password);

    if (!response) {
      const err = await response;
      if (err) console.log(err);
    }

    window.location = "/home";
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <>
        <div className="centered-page-content">
          <Logo />
          <sl-form className="form-signup dark-theme">
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
              onClick={this.handleSubmit}
            >
              <span>Log In</span>
            </Link>
            <p>
              New to Break? <Link to="/register">Sign Up</Link>
            </p>
          </sl-form>
        </div>
      </>
    );
  }
}

export default LoginForm;
