import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-lightBg dark:bg-primary transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Hello, I'm <span className="text-accent">Vinay</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-600 dark:text-gray-300">
            Full Stack Engineer
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Making pixels do cool things across web and mobile
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
