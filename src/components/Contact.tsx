// src/components/Contact.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const FORM_SPREE_URL = process.env.REACT_APP_FORMSPREE_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!FORM_SPREE_URL) {
      console.error("Formspree URL is not configured. Please set REACT_APP_FORMSPREE_URL in your .env file.");
      setFormStatus('error'); 
      return;
    }

    setFormStatus('idle'); 

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch(FORM_SPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-12">
          {t('contact_title')}
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          {t('contact_intro')}
        </p>

        {/* Formulario de Contacto */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder={t('contact_name')}
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder={t('contact_email')}
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              rows={6}
              placeholder={t('contact_message')}
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {t('contact_send')}
          </button>

          {formStatus === 'success' && (
            <p className="mt-4 text-green-400">{t('contact_success')}</p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-red-400">{t('contact_error')}</p>
          )}
        </form>

        {/* Iconos de Redes Sociales y Email */}
        <h3 className="text-3xl font-bold text-blue-400 mb-6">
          {t('contact_social_media')}
        </h3>
        <div className="flex justify-center items-center space-x-6 mb-12">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lisandro-piatti/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-5xl"
            aria-label="LinkedIn Profile"
          >
            <img src="images/icons/linkedin.svg" alt="LinkedIn" className="w-12 h-12 filter grayscale hover:grayscale-0" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Litti8" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-5xl"
            aria-label="GitHub Profile"
          >
             <img src="images/icons/github.svg" alt="GitHub" className="w-12 h-12 filter grayscale hover:grayscale-0" />
          </a>

          {/* Email */}
          <a
            href="mailto:lisandropiatti@gmail.com" 
            className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-5xl"
            aria-label="Send Email"
          >
            <img src="images/icons/gmail.svg" alt="Email" className="w-12 h-12 filter grayscale hover:grayscale-0" />
          </a>
        </div>

        {/* Botón de Descarga de CV */}
        <a
          href="%PUBLIC_URL%/cv/working_cv.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          <img src="images/icons/pdf.svg" alt="Download CV" className="w-6 h-6 mr-3 " />
            {t('contact_download_cv')}
        </a>
      </div>
    </section>
  );
};

export default Contact;