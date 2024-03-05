import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/meghgala" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/megh-gala/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:megh.gala765@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer