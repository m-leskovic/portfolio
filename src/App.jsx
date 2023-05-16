import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import data from "./data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App = () => {
  const [project, setProject] = useState(0);

  const nextProject = () => {
    setProject(() => {
      const temp = project;
      const updateTemp = temp + 1 > data.length - 1 ? 0 : temp + 1;
      return updateTemp;
    });
  };

  const prevProject = () => {
    setProject(() => {
      const temp = project;
      const updateTemp =
        temp - 1 > 0 ? temp - 1 : temp - 1 < 0 ? data.length - 1 : 0;
      return updateTemp;
    });
  };
  return (
    <div id="app">
      <Header />
      <AboutMe />
      <section id="featured-outer-wrapper">
        <h1 id="featured-title">&lt;Featured Work /&gt;</h1>
        <div id="featured-inner-wrapper">
          <Slider skipProject={prevProject} faIcon={faAngleLeft} />
          <Projects
            key={data[project].id}
            name={data[project].name}
            src={data[project].src}
            description={data[project].description}
            source={data[project].source}
          />
          <Slider skipProject={nextProject} faIcon={faAngleRight} />
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
