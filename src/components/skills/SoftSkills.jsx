import { RxLightningBolt } from "react-icons/rx";

const SoftSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className=" icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">DBeaver</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">GitHub Desktop</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">Illustrator</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className=" icon__box"><RxLightningBolt /></i>

            <div>
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
