import React from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { DarkModeProps, ToggleProps } from '../types';
import { BUTTON_CLASSES } from '../styles';

interface SourcesSectionProps extends DarkModeProps, ToggleProps {
  sources: string[];
}

const SourcesSection: React.FC<SourcesSectionProps> = ({ isDarkMode, isExpanded, onToggle, sources }) => {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';

  return (
    <div className={`${bgColor} rounded-lg shadow p-4`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Sources</h2>
        <button 
          onClick={onToggle} 
          className={BUTTON_CLASSES}
          aria-label={isExpanded ? "Collapse sources" : "Expand sources"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {isExpanded && (
        <ul className={`list-disc list-inside ${textColor}`}>
          {sources.map((source, index) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SourcesSection;