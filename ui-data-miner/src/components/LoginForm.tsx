import React from 'react';
import { DarkModeProps } from '../types';
import { INPUT_CLASSES, BUTTON_CLASSES } from '../styles';

interface LoginFormProps extends DarkModeProps {
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleDarkMode: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isDarkMode, toggleDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const formBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const inputBgColor = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300';

  return (
    <div className={`flex items-center justify-center h-screen ${bgColor} ${textColor}`}>
      <form onSubmit={onLogin} className={`p-8 rounded shadow-md ${formBgColor}`}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          className={`${INPUT_CLASSES} ${inputBgColor} mb-4`}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className={`${INPUT_CLASSES} ${inputBgColor} mb-4`}
          required
        />
        <button 
          type="submit" 
          className={`${BUTTON_CLASSES} w-full bg-blue-600 text-white hover:bg-blue-700`}
        >
          Login
        </button>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm">Dark Mode</span>
          <button 
            onClick={toggleDarkMode} 
            className={`w-12 h-6 rounded-full p-1 ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label="Toggle dark mode"
          >
            <div 
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                isDarkMode ? 'translate-x-6' : ''
              }`}
            ></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;