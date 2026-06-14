import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ProvakorKonik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/provakorkonik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Never Give up! Consistency beats motivation<a href="https://github.com/ProvakorKonik" target="_blank" rel="noreferrer"> - Made by Provakor</a> with 💜</p>
    </footer>
  );
}

export default Footer;