import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vinaybomma",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "GitHub",
      url: "https://github.com/vinaybomma",
      icon: "fab fa-github",
    },
    {
      name: "Blog",
      url: "https://vinaybomma.hashnode.dev",
      icon: "fas fa-rss",
    },
    {
      name: "Email",
      url: "mailto:itsvinaybomma@gmail.com",
      icon: "fas fa-envelope",
    },
  ];

  return (
    <footer className="py-12 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-6 md:mb-0">
            <p>&copy; {currentYear} Vinay Bomma. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/80 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
