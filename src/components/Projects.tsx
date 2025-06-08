
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard'; 

interface Project {
  imageSrc: string;
  titleKey: string;
  descriptionKey: string;
  techKey: string;
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  
  const projectsList: Project[] = [
    {
      imageSrc: '/images/project-ecommerce-backend.jpg', 
      titleKey: 'project_1_title',
      descriptionKey: 'project_1_description',
      techKey: 'project_1_tech',
      githubLink: 'https://github.com/tu_usuario/tu_repo_ecommerce',
    },
    {
      imageSrc: '/images/project-chat-app.jpg', 
      titleKey: 'project_2_title',
      descriptionKey: 'project_2_description',
      techKey: 'project_2_tech',
      githubLink: 'https://github.com/tu_usuario/tu_repo_chat',
      demoLink: 'https://chat-app.tudominio.com', 
    },
    {
      imageSrc: '/images/project-portfolio.jpg',
      titleKey: 'project_3_title',
      descriptionKey: 'project_3_description',
      techKey: 'project_3_tech',
      githubLink: 'https://github.com/tu_usuario/my-professional-portfolio',
      demoLink: 'https://tu-portafolio.com', 
    },
    
  ];

  return (
    
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-12">
          {t('projects_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              titleKey={project.titleKey}
              descriptionKey={project.descriptionKey}
              techKey={project.techKey}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;