import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MyLinks = () => (
  <div className="myInfo">
    <p>Created by Nicholas Angleton</p>
    <div className="myLinks">
      <a href="https://github.com/N-Angleton">
        <FontAwesomeIcon className="myIcon github" icon={faGithub} />
      </a>
      <a href="mailto: nick.angleton@gmail.com">
        <FontAwesomeIcon className="myIcon email" icon={faEnvelope} />
      </a>
      <a href="https://www.linkedin.com/in/nhangleton/">
        <FontAwesomeIcon className="myIcon linkedin" icon={faLinkedin} />
      </a>
    </div>
  </div>
  
);
