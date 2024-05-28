// src/components/About.js
import React, { useState} from 'react';
import styled from 'styled-components';

import githubIcon from '../assets2/headshot.jpg';
import ftc from '../assets2/ftc.jpg';
import arduino from '../assets2/arduino.jpg';
import sdev from '../assets2/softwareDev.jpg';

export const About = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
  };

//   About section (5 pts): Provide more information about yourself, such as a summary of
// your background, interests, and career goals. Include a link to a PDF of your
// resume/cover letter (open this link in a new tab)

  const sections = [
    <Section1 key="section1" />,
    <Section2 key="section2" />,
    <Section3 key="section3" />
  ];
  return (
    <div id="bg">
      <div id="about">
        <h2>About Me</h2>
        <br></br>
        <ArrowContainer>
          <div className = "arrowButton" onClick={handlePrevClick}>◀</div>
          <div className = "arrowButton" onClick={handleNextClick}>▶</div>
        </ArrowContainer>
        {sections[currentSectionIndex]}

        
        
        <a href="https://docs.google.com/document/d/1wutIXrMEKM6gBdMlwGUPWQ9wUHNIc3MJn1EOc9T5EV4/edit?usp=sharing" className = "resumeButton">Download Resume</a>
      </div>
    </div>
  );
};

const Section1 = () => (
  <div className = "section">
    <div className = "section-text">
      <h3>Background</h3>
      <br></br>
      <p>
        To start, I'm currently a 4th year Computer Science Major at the University<br></br>
        of California, Riverside. I previously graduated from Monrovia High School.<br></br>
        In my journey getting to where I am today, I participated in various school<br></br>
        robotics programs for over 10 years now.<br></br>
        Starting in 6th grade, I partcipated in the FIRST robotics program till I<br></br>
        graduated in senior year of high school. Then picking up again Junior year in<br></br>
        college, I participated in the VEX Robotics University division (also known as VEXU)<br></br>
        In these competitions, my team and I compete with other teams from all around<br></br>
        the world.<br></br>
      </p>
    </div>
    <div>
      <img src = {ftc} alt="First Tech Challenge" id = "first"/>
    </div>
  </div>
);

const Section2 = () => (
  <div className = "section">
    <div className = "section-text">
    <h3>Interests</h3>
    <br></br>
    <p>After doing robotics in school for over 10 years, that is still one of my biggest interests.<br></br>
      In addition to this however, I also really enjoying working in embedded systems, as well as<br></br>
      applications in artificial intelligence.<br></br>
      In general, I just really enjoy creating objects or software.<br></br>
      Outside of this, I also really enjoy playing the violin, piano, and video games.
    </p>
    </div>
    <div>
      <img src = {arduino} alt = "Arduino" id = "arduino"/>
    </div>
  </div>
);

const Section3 = () => (
  <div className = "section">
    <div className = "section-text">
      <h3>Career Goals</h3>
      <br></br>
      <p>
        Ideally, my preferred job would be something in software engineering<br></br>
        or embedded systems. However, I would more than welcome a career in<br></br>
        artificial intelligence or data science.<br></br>
        In terms of long term goals, I want to create a sellable product<br></br>
        in the future that I can create a company around.
      </p>
    </div>
    <div>
      <img src = {sdev} alt="Code on a macbook"/>
    </div>
  </div>
);



const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default About;