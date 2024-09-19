import React from 'react';
import { Filter, Search } from "lucide-react";
import { DarkModeProps } from '../types';
import { INPUT_CLASSES, BUTTON_CLASSES } from '../styles';

interface SearchBarProps extends DarkModeProps {
  onFilterClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isDarkMode, onFilterClick }) => {
  const inputBgColor = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300';
  const iconColor = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const filterBgColor = isDarkMode ? 'bg-gray-700' : 'bg-gray-200';

  return (
    <div className="flex items-center mb-4">
      <div className="flex-grow relative">
        <input
          type="text"
          placeholder="Enter your question..."
          className={`${INPUT_CLASSES} pr-10 ${inputBgColor}`}
        />
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          aria-label="Search"
        >
          <Search size={20} className={iconColor} />
        </button>
      </div>
      <button 
        onClick={onFilterClick} 
        className={`${BUTTON_CLASSES} ml-2 ${filterBgColor}`}
        aria-label="Filter"
      >
        <Filter size={20} />
      </button>
    </div>
  );
};

export default SearchBar;