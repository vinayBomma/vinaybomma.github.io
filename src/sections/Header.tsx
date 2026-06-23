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
            className="group relative h-10 w-[4.75rem] rounded-full border border-gray-200 bg-gradient-to-r from-amber-100 to-sky-100 p-1 shadow-inner transition-colors duration-300 hover:border-accent dark:border-white/10 dark:from-slate-900 dark:to-primary"
            aria-label="Toggle color theme"
            aria-pressed={darkMode}
          >
            <span className="flex h-full items-center justify-between px-1.5 text-[0.72rem]">
              <i
                className="fas fa-sun text-amber-500"
                aria-hidden="true"
              ></i>
              <i
                className="fas fa-moon text-slate-500 dark:text-slate-200"
                aria-hidden="true"
              ></i>
            </span>
            <span
              className={`absolute top-1 grid h-8 w-8 place-items-center rounded-full bg-white text-sm shadow-lg ring-1 ring-black/5 transition-all duration-300 dark:bg-slate-800 dark:ring-white/10 ${
                darkMode
                  ? "left-[2.5rem] text-slate-100"
                  : "left-1 text-amber-500"
              }`}
            >
              <i
                className={darkMode ? "fas fa-moon" : "fas fa-sun"}
                aria-hidden="true"
              ></i>
            </span>
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
