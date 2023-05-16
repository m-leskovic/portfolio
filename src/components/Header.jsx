import Navbar from "./Navbar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header id="header-wrapper">
      <Navbar />
      <section id="profile-wrapper">
        <h1 id="portfolio-title">Portfolio</h1>
        <h2 id="name">Martina Lešković</h2>
        <p id="occupation">Front-end developer</p>
        <div id="profile-info-wrapper">
          <section id="email-wrapper">
            <h3 id="email-title">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Email
            </h3>
            <address>
              <a href="mailto:example@email.com" id="email">
                example@email.com
              </a>
            </address>
          </section>
          <section id="github-wrapper">
            <h3 id="github">
              <FontAwesomeIcon icon={faGithub} />
              &nbsp; Github
            </h3>
            <address>
              <a
                href="https://github.com/m-leskovic"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/m-leskovic
              </a>
            </address>
          </section>
        </div>
      </section>
    </header>
  );
};

export default Header;
