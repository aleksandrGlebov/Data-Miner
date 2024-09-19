import React from 'react';
import { ChevronDown, ChevronUp, Download, Printer } from "lucide-react";
import { DarkModeProps, ToggleProps } from '../types';
import { BUTTON_CLASSES } from '../styles';

interface AnswerSectionProps extends DarkModeProps, ToggleProps {
  answer?: string;
}

const AnswerSection: React.FC<AnswerSectionProps> = ({ isDarkMode, isExpanded, onToggle, answer }) => {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`${bgColor} rounded-lg shadow p-4 mb-4`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Answer</h2>
        <div>
          <button onClick={onToggle} className={`${BUTTON_CLASSES} mr-2`}>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <button className={`${BUTTON_CLASSES} mr-2`}>
            <Download size={20} />
          </button>
          <button className={BUTTON_CLASSES}>
            <Printer size={20} />
          </button>
        </div>
      </div>
      {isExpanded && (
        <p className={textColor}>
          {answer || 'Your generated answer will appear here...'}
        </p>
      )}
    </div>
  );
};

export default AnswerSection;