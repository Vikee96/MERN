import React from 'react'
import './About.css'
import Navbar from '../Navbar'
const About = () => {
  return (
    <div className='about'>
      <Navbar/>
      <p> this is about the todo list application this application
          allows user to create todo list and user can be delete 
          the todo list as well as update the todo list. this app
          is build using react js Library , to build this app the 
          react concept which has been used is hooks and redux tool 
          kit as well as form validation.
          to use this application user has to Create an account and 
          login here than only user can use this application.
      </p>
    </div>
  )
}

export default About