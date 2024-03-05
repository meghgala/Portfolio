import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/cat.png';
import RogfreeImage from '../images/skin.png';
import TindogImage from '../images/tt.png';
import WigglesImage from '../images/dd.png';
import HM from '../images/h&m.png';
import Bit from '../images/bit.png';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
          <div className='projectBox'> 
            <img className='projectPhoto' src={TindogImage} alt="Project display" /> 
            <div>
                <br />
                <h3>Turmeric & Thyme</h3>
                <br />
                This website was developed as a hobby project to learn and refine my full-stack development skills mostly focusing on the backend. The website serves as a repository for your recipes and also as a source of inspiration by having a look at other recipes.
                <br />
                <a href="https://github.com/meghgala/Turmeric-and-Thyme" target='_blank'>
                  <button className='projectbtn'><FaGithub/> Github</button>
                </a>
                <a href="https://tuermeric-and-thyme.onrender.com/index" target='_blank'>
                  <button className='projectbtn'><CgFileDocument/> Demo</button>
                </a>
            </div>
        </div>
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Turmeric And Thyme" /> */}
        <ProjectBox projectPhoto={WigglesImage} projectName="Drunkard Dilemmas" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Catalogger" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Skin Disease Classification" />
        <ProjectBox projectPhoto={HM} projectName="H&M recommendation system" />
        <ProjectBox projectPhoto={Bit} projectName="8 Bit Python Game" />
      </div>
    </div>
  )
}

export default Projects