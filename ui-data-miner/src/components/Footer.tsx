import React from 'react';
import { DarkModeProps } from '../types';

const Footer: React.FC<DarkModeProps> = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <footer className={`${bgColor} ${textColor} p-4 text-center`}>
      © {new Date().getFullYear()} Aleksandr Glebov. All rights reserved.
    </footer>
  );
};

export default Footer;