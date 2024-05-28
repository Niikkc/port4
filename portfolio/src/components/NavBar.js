// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Container, Nav } from "react-bootstrap";

import linkedInIcon from '../assets2/linkedIn.png';
import githubIcon from '../assets2/github.png';
import gmailIcon from '../assets2/gmail.png';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  

  const handleSetActiveLink = (value) => {
    setActiveLink(value);
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg">
      <Container>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#Hero" 
              className={activeLink === 'Hero' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleSetActiveLink('Hero')}
            >
              Hero
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleSetActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#education" 
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleSetActiveLink('education')}
            >
              Education/Skills
            </Nav.Link>
            <Nav.Link 
              href="#experienceProjects" 
              className={activeLink === 'experienceProjects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleSetActiveLink('experienceProjects')}
            >
              Experience/Projects
            </Nav.Link>
            <Nav.Link 
              href="#extracurriculars" 
              className={activeLink === 'extracurriculars' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleSetActiveLink('extracurriculars')}
            >
              Extracurriculars
            </Nav.Link>
            <span className="navbar-text">
             <div className="social-icon">
               <a href="https://www.linkedin.com/in/yourprofile" className = "shrinkIcon" target="_blank" rel="noopener noreferrer"><img src = {linkedInIcon} alt="LinkedIn"/></a>
               <a href="https://github.com/Niikkc" target="_blank" rel="noopener noreferrer"><img src = {githubIcon} alt="GitHub"/></a>
               <a href="mailto:kang.nicholas1230@gmail.com" target="_blank" rel="noopener noreferrer"><img src = {gmailIcon} alt="Gmail"/></a>
             </div>
           </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
