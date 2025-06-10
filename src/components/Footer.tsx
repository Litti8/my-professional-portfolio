// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  
  const githubUrl = "https://github.com/Litti8";
  const linkedinUrl = "https://www.linkedin.com/in/lisandro-piatti/";
  const emailAddress = "lisandropiatti@gmail.com";
  const cvPath = "%PUBLIC_URL%/cv/working_cv.pdf"; 

  const githubSvg = "images/icons/github.svg";
  const linkedinSvg = "images/icons/linkedin.svg";
  const envelopeSvg = "images/icons/gmail.svg";
  const pdfSvg = "images/icons/pdf.svg";

  return (
    <footer className="bg-gray-950 text-green-400 py-8 px-4 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="mb-2">
            <span className="text-green-500">{t('footer_command_prefix')}</span> {t('footer_command')}
          </p>
          <p className="ml-4">{t('footer_output_label')}</p>
          <ul className="ml-8 list-none space-y-1">
            <li>
              <span className="text-gray-300">{t('footer_name_label')}</span>{' '}
              <span className="text-white">Lisandro Piatti</span>
            </li>
            <li>
              <span className="text-gray-300">{t('footer_email_label')}</span>{' '}
              <a href={`mailto:${emailAddress}`} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <img src={envelopeSvg} alt="Email" className="inline-block w-5 h-5 mr-1 align-middle filter grayscale hover:grayscale-0" />
                {emailAddress}
              </a>
            </li>
            <li>
              <span className="text-gray-300">{t('footer_github_label')}</span>{' '}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <img src={githubSvg} alt="GitHub" className="inline-block w-5 h-5 mr-1 align-middle filter grayscale hover:grayscale-0" />
                {githubUrl.replace('https://github.com/', '')}
              </a>
            </li>
            <li>
              <span className="text-gray-300">{t('footer_linkedin_label')}</span>{' '}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <img src={linkedinSvg} alt="LinkedIn" className="inline-block w-5 h-5 mr-1 align-middle filter grayscale hover:grayscale-0" />
                {linkedinUrl.replace('https://www.linkedin.com/in/', '')}
              </a>
            </li>
            <li>
              <span className="text-gray-300">{t('footer_cv_label')}</span>{' '}
              <a href={cvPath} download className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <img src={pdfSvg} alt="Download CV" className="inline-block w-5 h-5 mr-1 align-middle filter grayscale hover:grayscale-0" />
                {t('contact_download_cv')} 
              </a>
            </li>
          </ul>
          <p className="mt-4 text-gray-500 text-xs">
            {t('footer_disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;