import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="app">Home</Link>
        </li>
        <li>
          <Link to="about-wrapper">About</Link>
        </li>
        <li>
          <Link to="featured-outer-wrapper">Projects</Link>
        </li>
        <li>
          <Link to="skills-outer-wrapper">Skills</Link>
        </li>
        <li>
          <Link to="contact-wrapper">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
