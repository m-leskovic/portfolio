import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};

const Projects = ({ name, src, description, source }) => {
  return (
    <motion.div
      id="project-wrapper"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <div id="img-wrapper">
        <img src={src} alt="Project" id="project-img" />
      </div>
      <section id="project-info-wrapper">
        <h3 id="project-name">{name}</h3>
        <p id="project-p">{description}</p>
        <a href={source} id="project-link" target="_blank" rel="noreferrer">
          <FontAwesomeIcon id="fa-icon" icon={faGithub} />
        </a>
      </section>
    </motion.div>
  );
};

export default Projects;
