// src/components/Extracurriculars.js
import React from 'react';
import styled from 'styled-components';

import extra from '../assets2/extracurricular.jpg'
import vexu from '../assets2/vexu.png'
import worlds from '../assets2/worlds.jpg'

export const Extracurriculars = () => {
  return(
    <div id = "bg">
      <br></br>
      <br></br>
      <br></br>
      <div id="extracurriculars">
        <div id = "test">
          <h2>Extracurriculars</h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <img src = {extra} alt="Extracurriculars Logo"/> */}
        {/* <h2>Extracurricular Activities</h2> */}
        <div id = "activityList">
          <div className = "activity">
            <div className = "activityIcon">
            <img src = {vexu} alt="VEXU Logo"/>
            </div>
            <div className = "activityText">
              <h3>VEXU Robotics</h3>
              <p>I've participated in VEXU Robotics at UCR for 2 years. In VEXU, our team builds two robots each year, and competes <br></br>
              in an annually changing game against other universities from all around the world. <br></br>
              As the largest robotics competition in the world, it has been an amazing experience to be able to meet <br></br>
              and play against teams from many different places and cultures<br></br>
              In both years the team has beat the odds as a new team and qualified for the VEXU World Championships.
                
              </p>
            </div>
          </div>
          <div id = "worldsPic">
            <img src = {worlds} alt="My robotics team below a VEX Robotics World Championship Arch"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extracurriculars;

const ExtracurricularsSection = styled.section`
  padding: 2rem;
  background: #fff;
`;

const Activity = styled.div`
  margin-bottom: 2rem;
`;
