import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Landing({ darkTheme, toggleTheme }) {
  return (
    <>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
