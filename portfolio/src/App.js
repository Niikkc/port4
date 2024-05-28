// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import Banner from './components/Banner'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './snow.scss';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Hero />
      <About />
      <EducationSkills />
      <ExperienceProjects />
      <Extracurriculars />
      <Footer />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
