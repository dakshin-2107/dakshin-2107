import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about">
          <Hero />
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<div className='w-full h-auto justify-center align-middle'><h1>Blogs page</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}
