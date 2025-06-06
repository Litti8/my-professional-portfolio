
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Navbar from './components/Navbar'; // <-- Importa el nuevo componente Navbar
// useTranslation ya no se necesita aquí porque el control de idioma se moverá al Navbar

function App() {
  // Los props para changeLanguage e i18n se pasarán al Navbar, si es necesario,
  // pero usaremos useTranslation directamente en Navbar para simplificar.

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* El Navbar va aquí, fijo en la parte superior */}
      <Navbar />

      {/* Eliminamos el h1 del título y los botones de idioma de aquí */}
      {/* <h1 className="text-center text-4xl font-bold py-8">
        {t('portfolio_title')}
      </h1> */}
      {/* Los botones de idioma también se moverán al Navbar */}

      <Hero />
      <About />
      <Skills />
      
    </div>
  );
}

export default App;