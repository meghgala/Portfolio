import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    'Turmeric And ThymeDesc' : "This website was developed as a hobby project to learn and refine my full-stack development skills mostly focusing on the backend. The website serves as a repository for your recipes and also as a source of inspiration by having a look at other recipes.",
    'Turmeric And ThymeGithub' : "https://github.com/meghgala/Turmeric-and-Thyme",
    'Turmeric And ThymeWebsite' : "https://tuermeric-and-thyme.onrender.com/index",

    'Drunkard DilemmasDesc' : "This website is a multiplayer drinking game made as a part of a course for interface programming. This game works using sockets and was made in Vue.js and supports cross-platform functionality.",
    'Drunkard DilemmasGithub' : "https://github.com/meghgala/Drunkard_Dilemmas",
    'Drunkard DilemmasWebsite' : "",

    CataloggerDesc:"Catalogger ensures a smooth integration between users and businesses, fostering meaningful interactions and facilitating transactions. Whether users are searching for unique products or businesses are looking to expand their reach.",
    CataloggerGithub:"https://github.com/meghgala/Catalogger",
    CataloggerWebsite:"",
    
    "Skin Disease ClassificationDesc":"In this project a custom CNN model has been deployed to classify the difference between a type of skin cancer i.e Melanoma. The two types being : Benign and Malignant. The project was given a UI using Bootstrap & backend was made using Flask.",
    "Skin Disease ClassificationGithub":"https://github.com/meghgala/Skin-Disease-Classification",
    "Skin Disease ClassificationWebsite":"",
    
    "H&M recommendation systemDesc":"The aim of this project is to gain insights from an h&m dataset. By performing Association Rule Mining and Graph clustering, we're able to see better recommendations and which products are frequently bought together.",
    "H&M recommendation systemGithub":"https://github.com/meghgala/H-and-M-Recommendation-System",
    "H&M recommendation systemWebsite":"",

    "8 Bit Python GameDesc":"My first attempt at making a platformer. There's an engine file present in the data folder which serves as a blueprint for majority of the project. Components included in the engine file: Parallax Scrolling, Character Flip Animation, Basic Movements, Audio",
    "8 Bit Python GameGithub":"https://github.com/meghgala/8-Bit-Python-Game",
    "8 Bit Python GameWebsite":"",

  }

  let show ='';

  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox