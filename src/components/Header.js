import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header id="header-wrapper">
            <Navbar />
            <section id="profile-wrapper">
                <h3 id="name">Martina Lešković</h3>
                <p id="occupation">Front-end developer</p>
                <div id="profile-info-wrapper">
                    <section id="email-wrapper">
                        <h5 id="email-title">
                            <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                             Email
                        </h5>
                        <address>
                            <a href="mailto:example@email.com" id="email">example@email.com</a>
                        </address>
                    </section>
                    <section id="github-wrapper">
                        <h5 id="github">
                            <FontAwesomeIcon icon={faGithub} />&nbsp;
                             Github
                        </h5>
                        <address>
                            <a href="https://github.com/m-leskovic" target="_blank" rel="noreferrer">
                                https://github.com/m-leskovic
                            </a>
                        </address>
                    </section>
                </div>
            </section>
        </header>
    )
}

export default Header



