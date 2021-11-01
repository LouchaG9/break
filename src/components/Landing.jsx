import React from "react";
import { Link } from "react-router-dom";
import { RandomTagline, Logo } from "./common";

export default function Landing({ children }) {
  return (
    <div className="centered-page-content">
      <RandomTagline />
      <Logo />
      <div className="buttons-area">
        <Link to="/login">Log In</Link>
        <p>or</p>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}
