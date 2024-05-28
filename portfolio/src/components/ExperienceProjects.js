// src/components/ExperienceProjects.js
import React from 'react';
import styled from 'styled-components';

export const ExperienceProjects = () => {
  return(
    <div id = "bg">
      <br></br>
      <br></br>
      <br></br>
      <div id="experienceProjects">
        <div id = "test">
          <h2>Projects / Achievements</h2>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className = "projectLine">
          <VL className="vl"></VL>
          <div className = "projects">
            <div className = "project">
              <h3>Winner of the AB InBev, Twilio, and Wolfram Alpha Awards at Citrus Hack 2022</h3>
              <br></br>
              <p>For this, we created a machine learning facial recognition
              software capable of taking instant attendance. Students would<br></br>
              have attendance taken as they walked through the door
              We calculated that this would be able to save k-12 schools around
              15 hours per class, per year.<br></br>
              For a single class, which usually lasts about an hour, this equates
              to over <strong>2 WEEKS</strong> worth of class. With 6 classes,
              this is 90 hours.<br></br>
              This project was built in Python
              </p>
            </div>
            <div className = "project">
              <h3>1st Place in the EchoAR category at Cutie Hack 2020</h3>
              <br></br>
              <p>In this, we created an augmented reality application
              in order to help productivity and engagement within classes
              in a COVID-19 environment.<br></br>
              Users would be able to see and select their answers
              within a 3d space in a Kahoot styled learning game.
              This game was built using unity, with the  <br></br>
              website hosted using resources at the hackathon.
              </p>
            </div>
            <div className = "project">
              <h3>1st Place at the RMDS Labs Hackathon in 2019</h3>
              <p>
                Used a linear regression algorithm to predict cars MPG based
                on different factors of a car. We used this to determine the<br></br>
                best cars for different scenarios. This project was built in Python.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceProjects;


const VL = styled.div`
  border-left: 6px solid #FFF;
  height: 600px;
  margin-left: 150px;
`;
