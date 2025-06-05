
import React from 'react';
import { useTranslation } from 'react-i18next';

import SoftSkillItem from './SoftSkillItem';

// --- Interfaces ---
interface HardSkill {
  name: string;
  iconUrl: string; 
}

interface SoftSkill {
  titleKey: string;
  descriptionKey: string;
  classes: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  // ---  (Hard Skills) ---
  
  const hardSkillsList: HardSkill[] = [
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


  // --- (Soft Skills) ---
  const softSkillsList: SoftSkill[] = [
    { titleKey: 'soft_skill_1_title', descriptionKey: 'soft_skill_1_description', classes: 'text-3xl font-bold italic text-blue-300' },
    { titleKey: 'soft_skill_2_title', descriptionKey: 'soft_skill_2_description', classes: 'text-2xl font-semibold text-purple-300' },
    { titleKey: 'soft_skill_3_title', descriptionKey: 'soft_skill_3_description', classes: 'text-xl font-medium text-green-300' },
    { titleKey: 'soft_skill_4_title', descriptionKey: 'soft_skill_4_description', classes: 'text-2xl font-bold underline text-yellow-300' },
    { titleKey: 'soft_skill_5_title', descriptionKey: 'soft_skill_5_description', classes: 'text-xl italic text-red-300' },
    { titleKey: 'soft_skill_6_title', descriptionKey: 'soft_skill_6_description', classes: 'text-3xl font-extrabold text-orange-300' },
    { titleKey: 'soft_skill_7_title', descriptionKey: 'soft_skill_7_description', classes: 'text-2xl italic text-pink-300' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-12">
          {t('skills_title')}
        </h2>

        {/* (Hard Skills) */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-200 mb-8">{t('hard_skills_subtitle')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {hardSkillsList.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                
                <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
                <p className="text-xl font-semibold text-gray-100">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* (Soft Skills) */}
        <div>
          <h3 className="text-4xl font-bold text-gray-200 mb-8">{t('soft_skills_subtitle')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkillsList.map((softSkill, index) => (
              <SoftSkillItem
                key={index}
                titleKey={softSkill.titleKey}
                descriptionKey={softSkill.descriptionKey} 
                classes={softSkill.classes}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;