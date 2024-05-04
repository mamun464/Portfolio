import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { BsLayers } from "react-icons/bs";
import { BiSolidBoltCircle } from "react-icons/bi";


const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className=" about__icon"><LuGraduationCap /></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">BSc. in CSE</span>
      </div>

      <div className="about__box">
        <i className=" about__icon"><BsLayers /></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1.5 Years</span>
      </div>

      <div className="about__box">
        <i className=" about__icon"><BiSolidBoltCircle /></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">80+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
