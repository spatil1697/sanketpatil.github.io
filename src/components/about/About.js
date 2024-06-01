import React from 'react'
import "./about.css"
import Image from "../../assets/me.png"
import {RiAwardFill} from 'react-icons/ri'
import {AiFillProject} from 'react-icons/ai'
import "../../index.css"
import CV from '../../assets/cv.pdf';

const about = () => {
  return (
    <section id="about" className='full-width-background_light'>
      <h5 className='about_sub_header'>Get To Know </h5>
      <h2>About Me </h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me_image">
            <img  src={Image} alt="me"/>
          </div>
        </div>
        <div className="about_content">
           {/*
          <div className="about_cards">
            <article className='about_card'>
              <RiAwardFill className='about_icon'/>
              <h5> Experience </h5>
              <small> Years working</small>
            </article>
        
            <article className='about_card'>
              <AiFillProject className='about_icon'/>
              <h5> Projects </h5>
              <small> Years working</small>
            </article>
          </div>
          */}
          <p className='break'>
            I am a skilled software developer with a strong background in Java, JavaScript, and various frameworks like Spring Boot, React, and Node.js.
            I have experience in both frontend and backend development, integrating RESTful APIs, and managing SQL and NoSQL databases. Proficient in
            English and with basic German skills, Ready to build awesome software and have some fun doing it!
          <br/>
            Apart from coding, I love exploring new places and traveling. I play soccer to stay
            active and enjoy the teamwork and when I want to chill, you will find me playing PC games, whether it is
            something competitive or a game with a good story.
          </p>
          <a href={CV} download className='btn download_btn'>Download CV</a>
          <a href= "#contact" className='btn btn-primary'>Contact Me</a> 
    
        </div>
      </div>    
    </section>
  )
}

export default about;