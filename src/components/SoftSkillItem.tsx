
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react';

interface SoftSkillItemProps {
  titleKey: string;
  descriptionKey: string; 
  classes: string; 
}

const SoftSkillItem: React.FC<SoftSkillItemProps> = ({ titleKey, descriptionKey, classes }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Settiing Floating UI tooltip
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen, 
    placement: 'bottom', 
    middleware: [
      offset(10),
      flip(),
    ],
    whileElementsMounted: autoUpdate,
  });

  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    
    <div
      ref={refs.setReference} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className="relative" 
    >
     
      <button
        className={`
          ${classes}
          inline-block px-4 py-2 rounded-full cursor-default
          bg-gray-700 hover:bg-gray-600 transition-colors duration-200
          transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
          whitespace-nowrap
        `}
      >
        {t(titleKey)}
      </button>

      {/* Floating Tooltip */}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles} 
          className="z-40 bg-gray-700 text-white p-4 rounded-lg shadow-xl border border-blue-500 text-left max-w-xs transition-opacity duration-300 opacity-100 pointer-events-auto"
        >
          <h4 className="text-xl font-bold mb-2 text-blue-300">{t(titleKey)}</h4>
          <p className="text-sm text-gray-200">{t(descriptionKey)}</p>
        </div>
      )}
    </div>
  );
};

export default SoftSkillItem;