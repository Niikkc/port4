// src/components/Hero.js
import React from 'react';
import headshot from "../assets2/headshot.jpg"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Hero = () => {
  return(
    <div id = "bg">
      <section className = "block" id = "Hero">
        <div className="hero-text">
          <h1>Nicholas Kang</h1>
          <br></br>
          <p>
            Hi, I'm Nick, a 4th year CS major at the University of California, Riverside. <br></br>
            Currently, I'm really interested in embedded systems and robotics, and <br></br>
            would love to eventually work in these fields. 
          </p>
        </div>
        <div className="hero-image">
          <img src = {headshot} alt="Your description" />
        </div>
      </section>
    </div>
  )
}

export default Hero;
