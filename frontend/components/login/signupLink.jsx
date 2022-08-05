import React from "react";
import { Link } from "react-router-dom";

export const SignupLink = () => (
  <div className="signupLinkContainer">
    <p className="signupText">
      Don't have an account?
      <Link to="/signup" className="createAccountLink">
        <span>Sign up</span>
      </Link>
    </p>
  </div>
);
