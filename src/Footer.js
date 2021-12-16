import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="containerFooter">
      <p className="CreatorsTittle">
        Created by: <span>José Urdaneta Matos</span>
      </p>
      <div className="iconsContainer">
        <a href="https://www.linkedin.com/in/joseurdanetam/" target="_blank">
          <img className="icon" src="img/linkedinIcon.png" />
        </a>
        <a href="https://github.com/joseurdanetam" target="_blank">
          <img className="icon" src="img/githubIcon.png" />
        </a>
        <a href="mailto:ing.joseurdaneta@hotmail.com" target="_blank">
          <img className="icon" src="img/emailIcon.png" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
