
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation(); 

  return (
    <section className="relative h-screen flex items-center justify-center text-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-90 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold text-white leading-tight mb-4">
          {t('hero_title', { name: '[Tu Nombre]' })} 
        </h1>
        <p className="text-2xl text-gray-200 mb-8">
          {t('hero_subtitle', { specialty: '[Tu Especialidad, ej: Frontend con React]' })} 
        </p>
        <div className="space-x-4">
          <a 
            href="#projects"
            className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
          >
            {t('view_projects')} 
          </a>
          <a 
            href="#contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
          >
            {t('contact_me')} 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;