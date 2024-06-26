import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">HTML5</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className=" icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">CSS3</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className=" icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className=" icon__box"><BiBadgeCheck /></i>

            <div>
              <h3 className="skills__name">Bootstrap/Semantic</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
