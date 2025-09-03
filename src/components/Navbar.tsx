import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import useScrollSpy from '../hooks/useScrollSpy';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 64);

  const navLinks = [
    { id: 'hero', titleKey: 'nav_home' },
    { id: 'about', titleKey: 'nav_about' },
    { id: 'skills', titleKey: 'nav_skills' },
    { id: 'projects', titleKey: 'nav_projects' },
    { id: 'contact', titleKey: 'nav_contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Lógica para el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-gray-900 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-opacity-100 shadow-none bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Botón de Hamburguesa para Móviles (aparece a la izquierda) */}
          <div className="absolute left-0 md:hidden flex items-center">
            <button onClick={toggleMobileMenu} type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation">
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Título del Portafolio - CORREGIDO */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <Link to="hero" smooth={true} duration={500} className="text-white text-xl font-bold cursor-pointer ml-10 md:ml-0">
              {t('portfolio_title')}
            </Link>
          </div>

          {/* Menú de Navegación para Escritorio */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-64}
                className={`text-white text-lg font-medium transition-colors duration-300 border-b-2 border-transparent hover:text-blue-400 hover:border-blue-400 cursor-pointer ${activeSection === link.id ? 'text-blue-400 border-blue-400' : ''}`}
              >
                {t(link.titleKey)}
              </Link>
            ))}
          </div>

          {/* Botones de Idioma (permanecen a la derecha) */}
          <div className="flex items-center space-x-2 absolute right-0">
            <button onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'} transition-colors duration-200 text-sm`}
              aria-label="Switch to English">
              EN
            </button>
            <button onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'} transition-colors duration-200 text-sm`}
              aria-label="Cambiar a español">
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 bg-opacity-95 backdrop-blur-sm border-b border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors cursor-pointer ${activeSection === link.id ? 'bg-blue-600' : ''}`}
            >
              {t(link.titleKey)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;