import React from 'react'
import "./header.css"
import { useState } from "react"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo"><u>MAMUN</u></a>
                
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__me">
                    <li className="nav__list grid">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-estate nav__icon">
                            </i> Home
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-user nav__icon">
                            </i> About Me
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-bolt nav__icon">
                            </i> Skills
                        </a>
                        </li>
                    <li className="nav__list grid">
                        <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === "#experiences" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-location-arrow nav__icon">
                            </i> Experience
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#references" onClick={() => setActiveNav('#references')} className={activeNav === "#references" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-message nav__icon">
                            </i> References
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === "#contacts" ? "nav__link active-link" : "nav__link "}>
                            <i class="uil uil-message nav__icon">
                            </i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header