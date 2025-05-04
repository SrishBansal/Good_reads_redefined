import React from 'react';
import { FaSun, FaMoon, FaBook } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="flex items-center">
        <FaBook className="text-primary-light text-2xl mr-2" />
        <h1>BookShelf</h1>
      </div>
      <button 
        onClick={toggleDarkMode} 
        className="dark-mode-toggle flex items-center"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <>
            <FaSun className="mr-2" /> Light Mode
          </>
        ) : (
          <>
            <FaMoon className="mr-2" /> Dark Mode
          </>
        )}
      </button>
    </header>
  );
};

export default Header;