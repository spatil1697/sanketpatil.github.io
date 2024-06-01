import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaTwitter } from "react-icons/fa";



const HeaderSocials = () => {
  return (
    <div className = 'header_socials'>
      <a href='https://www.linkedin.com/in/sanket-patil-467330175/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/spatil1697' target="_blank"><BsGithub/></a>
      <a href= "https://x.com/Sanketpl123"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials