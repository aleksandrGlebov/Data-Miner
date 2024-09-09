import React, { useState } from 'react';
import { Search, Filter, Settings, Download, Printer, ChevronDown, ChevronUp, LogOut, Sun, Moon } from 'lucide-react';

const KnowledgeAssistant = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(true);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const LoginForm = () => (
    <div className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <form onSubmit={handleLogin} className={`p-8 rounded shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" className={`w-full p-2 mb-4 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} />
        <input type="password" placeholder="Password" className={`w-full p-2 mb-4 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        <p className="mt-4 text-sm">
          <button onClick={toggleDarkMode} className="text-blue-500 hover:underline">
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </p>
      </form>
    </div>
  );

  const MainInterface = () => (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'} text-white p-4`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Knowledge Assistant</h1>
          <div className="flex items-center">
            <button onClick={toggleSettings} className="p-2 rounded hover:bg-opacity-80">
              <Settings size={24} />
            </button>
            <button onClick={handleLogout} className="p-2 rounded hover:bg-opacity-80 ml-2">
              <LogOut size={24} />
            </button>
          </div>
        </div>
      </header>

      {isSettingsOpen && (
        <div className={`absolute right-0 mt-16 w-48 rounded-md shadow-lg py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
          <button onClick={toggleDarkMode} className="block px-4 py-2 text-sm w-full text-left hover:bg-opacity-80">
            {isDarkMode ? <Sun size={18} className="inline mr-2" /> : <Moon size={18} className="inline mr-2" />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}

      <main className="flex-grow p-4 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Enter your question..."
                className={`w-full p-2 pr-10 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
              </button>
            </div>
            <button className={`ml-2 p-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded hover:bg-opacity-80`}>
              <Filter size={20} />
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4 mb-4`}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">Answer</h2>
                  <div>
                    <button onClick={() => setIsAnswerExpanded(!isAnswerExpanded)} className="mr-2">
                      {isAnswerExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <button className="mr-2">
                      <Download size={20} />
                    </button>
                    <button>
                      <Printer size={20} />
                    </button>
                  </div>
                </div>
                {isAnswerExpanded && (
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Your generated answer will appear here...
                  </p>
                )}
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4`}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">Sources</h2>
                  <button onClick={() => setIsSourcesExpanded(!isSourcesExpanded)}>
                    {isSourcesExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {isSourcesExpanded && (
                  <ul className={`list-disc list-inside ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <li>Jira ticket #1234</li>
                    <li>Confluence page: Project Overview</li>
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );

  return isLoggedIn ? <MainInterface /> : <LoginForm />;
};

export default KnowledgeAssistant;