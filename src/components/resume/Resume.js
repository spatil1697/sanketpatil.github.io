import React from 'react'
import"./resume.css"
import { GiGraduateCap } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";

const experienceData=[
  {
    id: 1,
    date:'June 2023 - December 2023',
    title: 'Software Developer (Master Thesis)',
    description:'Designed and developed a customer-specific software solution in Java, Groovy and Grails. Integrated Spring Boot based RESTful APIs and Implemented frontend configuration within the mySPECTRA environment. Worked with databases such as ArangoDB, PostgreSQL and Oracle and implemented user interfaces for users.',
    company:'LS Telcom AG',
  },
  {
    id: 2,
    date:'March 2023 - June 2023',
    title: 'Software Developer (Internship)',
    description:'Identified and resolved various bugs using Java, JavaScript and Vue.js. Designed, implemented, tested and automated a data migration (ETL) process using Java, Apache Hop and SQL. Automated data migration across various services, including migration of data from legacy systems to cloud environment. Extracted data from PostgreSQL and Oracle using SQL. Developed data mapping strategies for different services. Actively participated in Agile Scrum meetings, learning project management methods.',
    company:'LS Telcom AG',
  }
]

const educationData=[
  {
    id: 1,
    date:'October 2021 - January 2022 ',
    title: 'M. Sc. in Communication and Media Engineering',
    description:'I completed my master’s degree with a focus on media and computer science. During my studies, I gained advanced knowledge in computer science and web development. I also developed skills in management, problem-solving, software and web development.',
    university:'Offenburg University of Applied Sciences',
  },
  {
    id: 2,
    date:'August 2016 - October 2020',
    title: ' Bachelor of Electronics Engineering',
    description:'I gained my fundamental knowledge and foundation in electronics and computer science during my bachelor’s degree. While pursuing my degree, I worked on a project called Smart Farming using IoT, where I was responsible for developing the web interface.',
    university:'University Of Mumbai',
  }
]


const Resume = () => {
  return (
    <section id  = 'resume' className='full-width-background_light'>
    <h5 className='resume_sub_header'> My Experience </h5>
    <h2> Resume </h2>

    <div className = "container resume_container">
      <div>
        <h3> Education </h3>
        {
          educationData.map(({id, date, title, description, university}) => (
          <article key= {id} className = "resume_item">
            <h5> <MdDateRange/> {date}  </h5>
            <h3> <GiGraduateCap/> {title}  </h3>
            <p> {description} </p>
            <h4> <FaUniversity /> {university}  </h4>
          </article>
        ))}
      </div>
      <div>
        <h3> Experience </h3>
        {
          experienceData.map(({id, date, title, description, company}) => (
            <article key= {id} className = "resume_item">
            <h5> <MdDateRange/> {date}  </h5>
            <h3> <MdOutlineWork /> {title}  </h3>
            <p> {description} </p>
            <h4> <MdHomeWork /> {company}  </h4>
          </article>
       ))}
      
      </div>
    </div>

  </section>
  )
}

export default Resume