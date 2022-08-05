import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <div className="footer">
    <a href="https://github.com/N-Angleton">
      <FontAwesomeIcon className="icon github" icon={faGithub} />
    </a>
    <a href="mailto: nick.angleton@gmail.com">
      <FontAwesomeIcon className="icon email" icon={faEnvelope} />
    </a>
    <a href="https://www.linkedin.com/in/nhangleton/">
      <FontAwesomeIcon className="icon linkedin" icon={faLinkedin} />
    </a>
  </div>
);
