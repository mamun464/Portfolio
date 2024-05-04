import { FaCode } from "react-icons/fa6";
// import { FaCode } from "react-icons/fa";
const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className=" icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">FastAPI</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">SQLite</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">Django</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">Flask</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><FaCode /></i>

            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
