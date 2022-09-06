import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <div className="footer">
    <a href="https://github.com/N-Angleton/The-Gram" target="_blank">
      <FontAwesomeIcon className="footerIcon" icon={faGithub} />
    </a>
    <a href="https://www.linkedin.com/in/nhangleton/" target="_blank">
      <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
    </a>
    <a href="mailto: nick.angleton@gmail.com">
      <FontAwesomeIcon className="footerIcon" icon={faEnvelope} />
    </a>
    <a href="https://angel.co/nicholas-angleton" target="_blank">
      <FontAwesomeIcon className="footerIcon" icon={faAngellist} />
    </a>
    <a href="https://angleton.io/" target="_blank"><div className="angletonIcon-outer"><span className="angletonIcon-inner">A</span></div></a>
  </div>
);
