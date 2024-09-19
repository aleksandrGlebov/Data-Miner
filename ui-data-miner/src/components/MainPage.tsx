import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import SearchBar from './SearchBar';
import AnswerSection from './AnswerSection';
import SourcesSection from './SourcesSection';
import Footer from './Footer';

interface Filters {
  jira: boolean;
  confluence: boolean;
}

const DataMiner: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isAnswerExpanded, setIsAnswerExpanded] = useState<boolean>(true);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState<boolean>(true);
  const [isLoading] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({ jira: true, confluence: true });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prevState => !prevState);
  };

  const handleFilterChange = (source: keyof Filters) => {
    setFilters(prev => ({ ...prev, [source]: !prev[source] }));
  };

  const MainInterface: React.FC = () => (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header onLogout={handleLogout} isDarkMode={isDarkMode} />
      <main className="flex-grow p-4 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <SearchBar isDarkMode={isDarkMode} onFilterClick={toggleFilter} />
          {isFilterOpen && (
            <div className={`mb-4 p-4 rounded-lg shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold mb-2">Filter Sources:</h3>
              {(Object.keys(filters) as Array<keyof Filters>).map(source => (
                <label key={source} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={filters[source]}
                    onChange={() => handleFilterChange(source)}
                    className="mr-2"
                  />
                  {source.charAt(0).toUpperCase() + source.slice(1)}
                </label>
              ))}
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <AnswerSection
                isDarkMode={isDarkMode}
                isExpanded={isAnswerExpanded}
                onToggle={() => setIsAnswerExpanded(prev => !prev)}
                answer=""  // Add the actual answer here
              />
              <SourcesSection
                isDarkMode={isDarkMode}
                isExpanded={isSourcesExpanded}
                onToggle={() => setIsSourcesExpanded(prev => !prev)}
                sources={[]}  // Add the actual sources here
              />
            </>
          )}
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );

  return isLoggedIn ? (
    <MainInterface />
  ) : (
    <LoginForm onLogin={handleLogin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
  );
};

export default DataMiner;