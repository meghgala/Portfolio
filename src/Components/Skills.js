import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiGooglecloud} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'Language': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        SQL : <BsFiletypeSql />,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Python :<FaPython/>,
        'Google Cloud' : <SiGooglecloud />

    }
    
  return (
    <div title={skill} className='SkillBox'>
      <div className='skill-container'>
        {icon[skill]}
        <p className='skilltext'>{skill}</p>
      </div>
    </div>
  )
}

export default Skills
