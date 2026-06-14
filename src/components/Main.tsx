import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/styles/Main.scss';
import Avatar from "../assets/images/pd.jpeg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Provakor Das" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ProvakorKonik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/provakorkonik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/people/Always-Konik/61581143976931/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
          <h1>Provakor Das</h1>
          <p>Software Engineer (Android)</p>
          <p className="fs-12">Certified by SUST & LU Authority</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ProvakorKonik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/provakorkonik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
