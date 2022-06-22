import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
 <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>

   <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME} alt="About Image" />
      </div>
    </div>
    <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>3+ Months Working</small>
        </article>
        <article className="about_card">
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>3+ Worldwide</small>
        </article>
        <article className="about_card">
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>30+ Completed</small>
        </article>
      </div>
      <p>A learner who is looking forward to work in IT world, Enthusiastic to learn new Technology and gain industry experience, with at most dedication for the organizational and personal growth.
     </p>
     <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
   </div>
 </section>
  )
}

export default About
