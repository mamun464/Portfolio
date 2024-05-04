import { useState } from "react";
import { IoCodeWorking } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import "./services.css";
import { IoBriefcaseOutline } from "react-icons/io5";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="experiences">
      <h2 className="section__title">Professional Experience</h2>
      <span className="section__subtitle">Experiences I have Acquired</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="services__icon"><IoCodeWorking /></i>
            <h3 className="services__title">Jr. Software Engineer</h3>
            <a
              className="services__subtitle"
              href="https://www.reddotdigitalit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              RedDot Digital Limited, Robi Axieta
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className=" services__button-icon"><FaArrowRight /></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              ><RxCrossCircled /></i>

              <h3 className="services__modal-title">
                Software Engineer Trainee
              </h3>
              <p className="services__modal-description">
                Worked as a Software Engineer Trainee at{" "}
                <a
                  href="https://www.reddotdigitalit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>RedDot Digital Limited</b>
                </a>
                , Dhaka.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Django & Django REST Framework
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">API & RESTful API</p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">Object Relational Mapping (ORM)</p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Data Scraping Automation
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    React.js
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    JavaScript & ES-6
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className=" services__icon"><IoBriefcaseOutline /></i>
            <h3 className="services__title">
              Project Implementation Officer

            </h3>
            <a
              className="services__subtitle"
              href="https://technohaven.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Technohaven Company Limited

            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className=" services__button-icon"><FaArrowRight /></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              ><RxCrossCircled /></i>

              <h3 className="services__modal-title">Project Implementation Officer</h3>
              <p className="services__modal-description">
                I was associated with the government RAJUK project which was developed & maintained by{" "}
                <a
                  href="https://technohaven.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Technohaven Company Ltd</b>
                </a>
                <br /> Mohakhali, Dhaka-1212.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    System testing and issues diagnosis


                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    System Bug fixing and benchmark

                  </p>
                </li>
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Requirements analysis of project.

                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Manual Testing
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Functional & Non-Functional Testing
                  </p>
                </li>


              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="services__icon"><IoCodeWorking /></i>
            <h3 className="services__title">
              Undergraduate
              <br />
              Teaching Assistant
            </h3>
            <a
              className="services__subtitle"
              href="https://www.uiu.ac.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
              United International University
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="services__button-icon"><FaArrowRight /></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className=" services__modal-close"
                onClick={() => toggleTab(0)}
              ><RxCrossCircled /></i>

              <h3 className="services__modal-title">
                Undergraduate Teaching Assistant
              </h3>
              <p className="services__modal-description">
                Currently employed as an Undergraduate Assistant(UA) at{" "}
                <a
                  href="https://uiu.ac.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>United International University.</b>
                </a>
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    I had the privilage to offer guidance to students who were
                    new to programming.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Explaining the concepts of C Language, conducting problem
                    solving sessions & providing assistance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Teaching them the tricks of programming that helped me out
                    in my first-year of university.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Graphics &<br />
              UI Designer 2
            </h3>
            <a
              className="services__subtitle"
              href="https://www.freelancer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freelancer
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className=" services__button-icon"><FaArrowRight /></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="\ services__modal-close"
                onClick={() => toggleTab(0)}
              ><RxCrossCircled /></i>

              <h3 className="services__modal-title">Graphics & UI Designer1</h3>
              <p className="services__modal-description">
                From 2019 to 2022, I provided service as a Graphics/UI Designer
                to make exceptional UI designs, logo creations, and banner
                designs etc. This period allowed me to refine my skills, learn
                industry grade tools and deliver high-quality works, and build a
                strong portfolio showcasing my creative expertise in graphic
                design.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Designed User Interfaces | <strong>Figma</strong>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Designed Logos & Business Cards |{" "}
                    <strong>Illustrator</strong>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className=" services__modal-icon"><FaRegCheckCircle /></i>
                  <p className="services__modal-info">
                    Designed Product Pamphlets and Covers
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
