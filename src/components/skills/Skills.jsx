import React from 'react'
import "./skills.css"
import Frontend from "./Frontend.jsx"
import Backend from "./Backend.jsx"
import Coding from "./Coding.jsx"
import SoftSkills from './SoftSkills'


const Skills = () => {
  return (
    <section className='skill section' id='skills'>
      <h2 className='section__title'>My Skills</h2>
      <span className='section__subtitle'>A Glance of My Skillset!</span>
      
      <div className='skills__container container grid'>
        <Frontend />
                
        <Backend />

        <Coding />

        <SoftSkills />
      </div>
    </section>
  )
}

export default Skills