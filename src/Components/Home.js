import React from 'react';
import Lottie from  "lottie-react";
import Laptop from "../LottieFiles/Laptop.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MEGH GALA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Laptop} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p> I recently completed a Master's in Computer Science from <b>Uppsala University</b>, complemented by my master's thesis at <b>Alstom Rail
              Sweden </b>. <br/> <br/>
              I possess a strong proficiency in back-end development and demonstrate an aptitude for quickly mastering new languages and frameworks as needed, transforming raw ideas into tangible projects. <br/>
              I possess fluency in <b>Data Structures</b>, <b>the MERN stack</b>, <b>Python</b>, and <b>Machine Learning</b> at an intermediate level.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home