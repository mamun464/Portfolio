import React from 'react'

const Social = () => {
  return (
      <div className='home__social'>
          <a
              href="https://github.com/mamun464" className='home__social-icon'
              target="_blank" rel="noopener noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mamunur-rashid-162130/"
            className='home__social-icon'
            target="_blank" rel="noopener noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
              href="https://www.facebook.com/mrashid.uiu/"
              className='home__social-icon'
              target="_blank" rel="noopener noreferrer"
          >
            <i class="uil uil-facebook"></i>
          </a>
    </div>
  )
}

export default Social