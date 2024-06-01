import React from 'react'
import "./skills.css"
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";

const data=[
  {
    id: 1,
    icon: <MdOutlineComputer/> ,
    title:'Frontend Development',
    description:'Proficient in JavaScript, React, Redux, HTML and CSS.'
  },
  {
    id: 2,
    icon: <IoCodeSlashOutline />,
    title:'Backend Development',
    description:'Skilled in Java, Spring Boot, and Node.js.'
  },
  {
    id: 3,
    icon: <IoIosGitBranch />,
    title:'Version Control and DevOps',
    description:'Comfortable with Git, Docker, version control and CI/CD.',
  },
]

const Experience = () => {
  return (
    <section id = 'skills' className='full-width-background'>
      <h5> What Skills I have</h5>
      <h2> My Skills</h2>
      <div className=" container skills_container">
        {data.map(({id, icon, title, description}) => (
          <article key= {id} >
            <h3> {title}  </h3>
            <div className = "skills_details_icon"> {icon}</div>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export default Experience