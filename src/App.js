import { useRef } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToElement = (someRef) => someRef.current.scrollIntoView({ 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      <NavBar scroll={scrollToElement} home={homeRef} skills={skillsRef} projects={projectsRef} contact={contactRef}/>
      <Home homeRef={homeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
