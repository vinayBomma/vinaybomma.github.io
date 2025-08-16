import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-primary shadow-md z-50 py-4 transition-colors duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        <div
          className="lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
              isMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
              isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        <nav
          className={`fixed lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-primary shadow-lg lg:shadow-none transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
          } transition-transform duration-300 lg:transition-none`}
        >
          <ul className="flex flex-col lg:flex-row py-4 lg:py-0 items-center">
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li className="mb-4 lg:mb-0">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
