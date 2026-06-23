import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const navLinks = [
    { label: "Apps", href: "#apps" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/70 bg-white/85 py-3 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-primary/85">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 p-2 transition-colors duration-300 hover:border-accent dark:border-white/10 dark:bg-white/5"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg
                className="w-8 h-8 text-green-700"
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
                className="w-8 h-8 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a
            href="#home"
            className="hidden text-sm font-bold uppercase tracking-[0.22em] text-gray-800 transition-colors hover:text-accent dark:text-white md:inline-flex"
          >
            Vinay Bomma
          </a>
        </div>

        <nav
          className="flex min-w-0 items-center justify-end gap-1 overflow-x-auto text-sm font-semibold"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-gray-700 transition-colors hover:bg-accent/10 hover:text-accent dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://vinaybomma.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full border border-accent px-3 py-2 text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
