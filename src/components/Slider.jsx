import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ skipProject, faIcon }) => {
  return (
    <FontAwesomeIcon id="slider-btn" icon={faIcon} onClick={skipProject} />
  );
};

export default Slider;
