import {
  faCode,
  faImage,
  faDatabase,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faFigma,
  faGit,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section id="skills-outer-wrapper">
      <h1 id="skills-title">&lt;Skills /&gt;</h1>
      <div id="skills-inner-wrapper">
        <section className="skill-group">
          <h3>
            HTML5 <FontAwesomeIcon icon={faHtml5} className="fa" />
          </h3>
          <h3>
            CSS3 <FontAwesomeIcon icon={faCss3} className="fa" />
          </h3>
          <h3>
            JavaScript <FontAwesomeIcon icon={faJs} className="fa" />
          </h3>
          <h3>
            React JS <FontAwesomeIcon icon={faReact} className="fa" />
          </h3>
          <h3>
            Bootstrap <FontAwesomeIcon icon={faBootstrap} className="fa" />
          </h3>
          <h3>
            MobX <FontAwesomeIcon icon={faCode} className="fa" />
          </h3>
        </section>
        <section className="skill-group">
          <h3>
            MongoDB <FontAwesomeIcon icon={faDatabase} className="fa" />
          </h3>
          <h3>
            Git <FontAwesomeIcon icon={faGit} className="fa" />
          </h3>
          <h3>
            Adobe Photoshop <FontAwesomeIcon icon={faImage} className="fa" />
          </h3>
          <h3>
            Visual Studio Code{" "}
            <FontAwesomeIcon icon={faTerminal} className="fa" />
          </h3>
          <h3>
            Figma <FontAwesomeIcon icon={faFigma} className="fa" />
          </h3>
        </section>
      </div>
    </section>
  );
};

export default Skills;
