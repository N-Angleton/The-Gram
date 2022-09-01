import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MyLinks = () => (
  <div className="myInfo">
    <p>Created by Nicholas Angleton</p>
    <div className="myLinks">
      <a href="https://github.com/N-Angleton">
        <FontAwesomeIcon className="myIcon" icon={faGithub} />
      </a>
      <a href="https://angel.co/u/nicholas-angleton">
        <FontAwesomeIcon className="myIcon" icon={faAngellist} />
      </a>
      <a href="mailto: nick.angleton@gmail.com">
        <FontAwesomeIcon className="myIcon" icon={faEnvelope} />
      </a>
      <a href="https://www.linkedin.com/in/nhangleton/">
        <FontAwesomeIcon className="myIcon" icon={faLinkedin} />
      </a>
    </div>
  </div>
  
);
