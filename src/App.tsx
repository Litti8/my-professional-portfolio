
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar'; 

function App() {
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;