
import React from 'react';


import linkedInIcon from '../assets2/linkedIn.png';
import githubIcon from '../assets2/github.png';
import gmailIcon from '../assets2/gmail.png';

export const Footer = () => {
  return(
    <div id="contact">
      <p>Contact Me</p>
      <div id = "socials">
        <div className = "footerIconText">
          <div>
            <a href="https://www.linkedin.com/in/yourprofile" className = "footerIcon" target="_blank" rel="noopener noreferrer" ><img src = {linkedInIcon} alt="LinkedIn" className = "footerIcon"/></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nicholas-kang-a714b91b9/" target="_blank" rel="noopener noreferrer" className = "footerText">LinkedIn</a>
          </div>
        </div>
        <div className = "footerIconText">
          <div>
            <a href="https://github.com/Niikkc" target="_blank" rel="noopener noreferrer"><img src = {githubIcon} alt="GitHub" className = "footerIcon"/></a>
          </div>
          <div>
            <a href="https://github.com/niikkc" target="_blank" rel="noopener noreferrer" className = "footerText">GitHub</a>
          </div>
        </div>
        <div className = "footerIconText">
          <div>
          <a href="mailto:kang.nicholas1230@gmail.com" target="_blank" rel="noopener noreferrer"><img src = {gmailIcon} alt="Gmail" className = "footerIcon"/></a>
          </div>
          <div>
            <a href="mailto:kang.nicholas1230@gmail.com" target="_blank" rel="noopener noreferrer" className = "footerText">Gmail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

