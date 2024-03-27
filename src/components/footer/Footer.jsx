import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer__container container'>
            <h1 className='footer__title'>Md Mamunur Rashid</h1>
            
            <ul className='footer__list'> 
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href="#experiences" className='footer__link'>Experience</a>
                </li>
            </ul>
            
            <div className='footer__social'>
                <a
                    href="https://www.facebook.com/mrashid.uiu/" className='footer__social-link'
                    target="_blank" rel="noopener noreferrer"
                >
                    <i class="bx bxl-facebook"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/mamunur-rashid-162130/"
                    className='footer__social-link'
                    target="_blank" rel="noopener noreferrer"
                >
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a
                    href="https://github.com/mamun464"
                    className='footer__social-link'
                    target="_blank" rel="noopener noreferrer"
                >
                    <i class="bx bxl-github"></i>
                </a>
            </div>
            
            <div className='footer__copyright'>
                &#169; 2024 | All Rights Reserved  
            </div>
              
            <div className='footer__dev'>
                Developed By MRashid.
            </div>

            
        </div>
      </footer>
  )
}

export default Footer