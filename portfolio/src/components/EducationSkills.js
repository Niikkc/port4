// src/components/EducationSkills.js
import React from 'react';
import styled from 'styled-components';

import ucr from "../assets2/ucr.webp";
import python from "../assets2/pythonLogo.png";
import java from "../assets2/java.png";
import css from "../assets2/css.png";
import c from "../assets2/cLogo.png";
import js from "../assets2/js.webp";
import html from "../assets2/html.png";
import react from "../assets2/React.webp"


export const EducationSkills = () => {
  return(
    <div id = "bg">
      <br></br>
      <br></br>
      <br></br>
      <div id = "test">
          <h2>Education / Skills</h2>
      </div>
      <br></br>
      <br></br>
      <div id="educationSkills">
        <h2>Education</h2>
        <hr></hr>
        <div id = "education">
          <div id = "education-text">
            <h3>University of California, Riverside</h3>
            <p>Bachelor of Science in Computer Science, 2020 - Present</p>
          </div>
          <div id = "education-img">
            <img src = {ucr} alt="University of California, Riverside Logo"/>
          </div>
          
        </div>
        <hr></hr>
        <br></br>

        <div id = "skills">
          <h3>Skills</h3>
          <br></br>
          <br></br>
          <ul>
            <li className = "skillIcon">
              <div>
                <img src = {python} alt=""/>
              </div>
              <br></br>
              <div>
                <h5>Python</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {c} alt=""/>
              </div>

              <br></br>

              <div>
                <h5>C++</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {java} alt=""/>
              </div>

              <br></br>

              <div>
                <h5>Java</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {html} alt=""/>
              </div>

              <br></br>

              <div>
                <h5>HTML</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {css} alt=""/>
              </div>
              <br></br>
              <div>
                <h5>CSS</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {js} alt=""/>
              </div>

              <br></br>

              <div>
                <h5>Javascript</h5>
              </div>
            </li>
            <li className = "skillIcon">
              <div>
                <img src = {react} alt=""/>
              </div>

              <br></br>

              <div>
                <h5>React JS</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EducationSkills;



