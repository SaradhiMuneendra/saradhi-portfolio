import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
