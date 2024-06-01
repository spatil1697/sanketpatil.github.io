import React from 'react'
import "./nav.css";
import {FcHome} from 'react-icons/fc'
import {BiUserPin} from 'react-icons/bi'
import {AiFillBook} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'
import { GoProject } from "react-icons/go";
import {useState} from 'react'
import { GrTechnology } from "react-icons/gr";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""} title="Home"><FcHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""} title="About"><BiUserPin /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ""} title="Skills"><GrTechnology /></a>
      <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ""} title="Resume"><AiFillBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ""} title="Projects"><GoProject /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""} title="Contact Me"><RiMessage2Fill /></a>

    </nav>
  )
}

export default Nav