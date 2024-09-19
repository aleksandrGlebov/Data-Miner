import React from 'react';
import { LogOut } from "lucide-react";
import { DarkModeProps } from '../types';
import { BUTTON_CLASSES } from '../styles';

interface HeaderProps extends DarkModeProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-blue-600';

  return (
    <header className={`${bgColor} text-white p-4`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Data Miner</h1>
        <button 
          onClick={onLogout} 
          className={BUTTON_CLASSES}
          aria-label="Logout"
        >
          <LogOut size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;