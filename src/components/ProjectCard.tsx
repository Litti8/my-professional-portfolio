
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  imageSrc: string; 
  titleKey: string; 
  descriptionKey: string; 
  techKey: string; 
  githubLink?: string; 
  demoLink?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  titleKey,
  descriptionKey,
  techKey,
  githubLink,
  demoLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={imageSrc}
        alt={t(titleKey)}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-3">
          {t(titleKey)}
        </h3>
        <p className="text-gray-300 text-base mb-4">
          {t(descriptionKey)}
        </p>
        <p className="text-blue-300 font-semibold text-sm mb-4">
          {t('project_tech')}: <span className="text-gray-300">{t(techKey)}</span>
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              <i className="fab fa-github mr-2"></i> {/* Icono de GitHub */}
              {t('project_github')}
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <i className="fas fa-external-link-alt mr-2"></i> {/* Icono de enlace externo */}
              {t('project_demo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;