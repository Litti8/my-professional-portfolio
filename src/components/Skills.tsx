
import React from 'react';
import { useTranslation } from 'react-i18next';

// Para una sección de habilidades más dinámica, podrías definir tus habilidades aquí
// o en un archivo de datos separado (ej. src/data/skills.ts)
interface Skill {
  name: string;
  iconUrl?: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  
  const skillsList: Skill[] = [
    { name: 'Java', iconUrl: '/images/icons/java-logo.svg' },
    { name: 'Python', iconUrl: '/images/icons/python.svg' },
    { name: 'TypeScript', iconUrl: '/images/icons/typescript.svg' },
    { name: 'Node.js', iconUrl: '/images/icons/nodejs.svg' },
    { name: 'Docker', iconUrl: '/images/icons/docker.svg' },
    { name: 'AWS', iconUrl: '/images/icons/aws.svg' },
    { name: 'Azure', iconUrl: '/images/icons/azure.svg' },
    { name: 'Linux', iconUrl: '/images/icons/linux.svg' },
    { name: 'HTML', iconUrl: '/images/icons/html5.svg' },
    { name: 'CSS', iconUrl: '/images/icons/css3.svg' },
    { name: 'Tailwind CSS', iconUrl: '/images/icons/tailwindcss.svg' },
    { name: 'React', iconUrl: '/images/icons/react.svg' },
    { name: 'Spring', iconUrl: '/images/icons/spring.svg' },
    { name: 'Express.js', iconUrl: '/images/icons/express.svg' },
    { name: 'Django', iconUrl: '/images/icons/django.svg' },
    { name: 'Flask', iconUrl: '/images/icons/flask.svg' },
    { name: 'MongoDB', iconUrl: '/images/icons/mongodb.svg' },
    { name: 'PostgreSQL', iconUrl: '/images/icons/postgresql.svg' },
    { name: 'Git', iconUrl: '/images/icons/git.svg' },
    { name: 'GitHub', iconUrl: '/images/icons/github.svg' },
    { name: 'IntelliJ IDEA', iconUrl: '/images/icons/intellij-idea.svg' },
    { name: 'Visual Studio Code', iconUrl: '/images/icons/vscode.svg' },
    { name: 'Postman', iconUrl: '/images/icons/postman.svg' },
    { name: 'Jira', iconUrl: '/images/icons/jira.svg' },
    { name: 'Trello', iconUrl: '/images/icons/trello.svg' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-12">
          {t('skills_title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
              <p className="text-xl font-semibold text-gray-100">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-lg text-gray-300">
          {t('skills_description')}
        </p>
      </div>
    </section>
  );
};

export default Skills;