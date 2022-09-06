import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MyLinks = () => (
  <div className="myInfo">
    <p>Created by Nicholas Angleton</p>
    <div className="myLinks">
      <a href="https://github.com/N-Angleton" target="_blank">
        <FontAwesomeIcon className="myIcon" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/nhangleton/" target="_blank">
        <FontAwesomeIcon className="myIcon" icon={faLinkedin} />
      </a>
      <a href="mailto: nick.angleton@gmail.com">
        <FontAwesomeIcon className="myIcon" icon={faEnvelope} />
      </a>
      <a href="https://angel.co/nicholas-angleton" target="_blank">
        <FontAwesomeIcon className="myIcon" icon={faAngellist} />
      </a>
      <a href="https://angleton.io/" className="angletonLink" target="_blank">A</a>
    </div>
  </div>
  
);
