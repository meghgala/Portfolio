import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to know me!</h1>
          <p>

            Hi, my name is <b>Megh Gala</b>, currently based in Uppsala, Sweden.
            As a solution-driven software developer, I hold a master's degree in computer science from <b> Uppsala University </b> and boast over 2 years of hands-on experience in 
            software engineering garnered through internships and project engagements. I am proficient in software development and versed in machine learning. <br/><br/>
            Explore my portfolio to delve into a diverse array of projects and work experience that exemplify my technical proficiency in software development. 
          Scroll down to have a look at my professional skillset.
          In my spare time, I serve as a staff worker in the kitchen of Gästrike-Hälsinge nation in Uppsala, 
          while also sharing my coding expertise as a tutor on <a href='https://www.superprof.se/master-student-computer-science-with-years-coding-experience-and-months-teaching-experience.html'>Superprof.com</a>, 
          offering online instruction to anyone eager to learn programming.  <br/><br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      <hr className='line'></hr>
      <h3 className='SkillsMainHeading'>Professional Skillset</h3> <br/>
      {/* <h1 className='SkillsHeading'>Fullstack Skillset</h1> */}
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='SQL'/>
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Language' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Python'/>
        <Skills skill='Google Cloud'/>
        
      </div>

      {/* <h1 className='SkillsHeading'>Data and Machine learning Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div> */}
    </>
  )
}

export default About