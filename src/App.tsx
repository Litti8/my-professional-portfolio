import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import { useTranslation } from 'react-i18next'; 

function App() {
  const { t, i18n } = useTranslation(); 

  // Función para cambiar el idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <div className="absolute top-4 right-4 z-20 space-x-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          ES
        </button>
      </div>

      <h1 className="text-center text-4xl font-bold py-8">
        {t('portfolio_title')} 
      </h1>

      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
