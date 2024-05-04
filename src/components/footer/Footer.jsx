import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
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
                {/* <i className="bx bxl-facebook"><BiLogoFacebook /></i> */}
                <div className='footer__social'>
                    <a
                        href="https://www.facebook.com/mrashid.uiu/" className='footer__social-link'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <i className=""><FaFacebookF /></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mamunur-rashid-162130/"
                        className='footer__social-link'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <i className=""><FaLinkedinIn /></i>
                    </a>

                    <a
                        href="https://github.com/mamun464"
                        className='footer__social-link'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <i className="bx bxl-github"><FaGithub /></i>
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