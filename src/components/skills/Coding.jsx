import React from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";

const Coding = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Programming Languages</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="icon__box"><PiBracketsCurlyBold /></i>

            <div>
              <h3 className="skills__name">C/C++</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><PiBracketsCurlyBold /></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className=" icon__box"><PiBracketsCurlyBold /></i>

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="icon__box"><PiBracketsCurlyBold /></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* <div className='skills__data'>
                    <i className="uil uil-brackets-curly icon__box"></i>
                    
                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                
                  
                <div className='skills__data'>
                    <i className="uil uil-brackets-curly icon__box"></i>
                    
                    <div>
                        <h3 className='skills__name'>Java</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Coding;
