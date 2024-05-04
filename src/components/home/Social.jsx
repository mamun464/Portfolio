import React from 'react'
// import 'unicons/icon/css/line.css';
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";



const Social = () => {
  return (
    <div className='home__social'>
      <a
        href="https://github.com/mamun464" className='home__social-icon'
        target="_blank" rel="noopener noreferrer"
      >

        <FaGithub></FaGithub>
      </a>

      <a
        href="https://www.linkedin.com/in/mamunur-rashid-162130/"
        className='home__social-icon'
        target="_blank" rel="noopener noreferrer"
      >
        <FaLinkedin />

      </a>

      <a
        href="https://www.facebook.com/mrashid.uiu/"
        className='home__social-icon'
        target="_blank" rel="noopener noreferrer"
      >
        {/* <i className="uil uil-facebook"></i> */}
        <FaFacebookSquare />
      </a>
    </div>
  )
}

export default Social