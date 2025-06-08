
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useScrollSpy from '../hooks/useScrollSpy'; 

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  
  const sectionIds = ['hero', 'about', 'skills', 'projects']; 
  const activeSection = useScrollSpy(sectionIds, 64); 

  const navLinks = [
    { id: 'hero', titleKey: 'nav_home' },
    { id: 'about', titleKey: 'nav_about' },
    { id: 'skills', titleKey: 'nav_skills' },
    { id: 'projects', titleKey: 'nav_projects' }, 
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      
      const isScrolled = window.scrollY > 10; 
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg' 
        : 'bg-gray-900 shadow-none' 
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Nombre del Portafolio / Logo */}
        <div className="flex-shrink-0">
          <a href="https://github.com/Litti8" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
            {t('portfolio_title')}
          </a>
        </div>

        {/* Enlaces de Navegación */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                text-white text-lg font-medium transition-colors duration-300
                border-b-2 border-transparent
               hover:border-blue-400 hover:text-blue-400
              `}
            >
              {t(link.titleKey)}
            </a>
          ))}
        </div>

        {/* Botones de Cambio de Idioma */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
              ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
              ${i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;