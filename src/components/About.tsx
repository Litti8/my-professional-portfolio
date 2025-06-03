// src/components/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-8">
          {t('about_title')}
        </h2>
        <div className="text-lg leading-relaxed mb-12">
          <p className="mb-4">
            {t('about_paragraph_1')}
          </p>
          <p className="mb-4">
            {t('about_paragraph_2')}
          </p>
          <p>
            {t('about_paragraph_3')}
          </p>
        </div>
        <div className="mt-12">
          <img 
            src="/images/profile_webp.webp"
            alt={t('your_photo_alt_text')}
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-400 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;