import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Slider from './components/Slider';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './Data';
import { useState } from 'react';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [ project, setProject ] = useState(0);
  const nextProject = () => {
    setProject(() => {
        const temp = project;
        const updateTemp = (temp + 1 > data.length - 1)? 0 : temp + 1;
        return updateTemp;
    });
  }
  const prevProject = () => {
      setProject(() => {
          const temp = project;
          const updateTemp = (temp - 1 > 0)? temp - 1
                          :  (temp - 1 < 0)? data.length - 1
                          : 0;
          return updateTemp;
      });
  }
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
}

export default App;