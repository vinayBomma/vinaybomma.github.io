import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-lightBg pt-32 pb-20 transition-colors duration-300 dark:bg-primary md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,133,90,0.16),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.12),transparent_28%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-accent">
            Vinay Bomma
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-800 dark:text-white md:text-5xl lg:text-7xl">
            I build small, useful apps for everyday routines.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            I like building focused products that do one job well, feel good to
            use, and stay out of the way.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#apps" className="btn btn-primary">
              Explore Apps
            </a>
            <a href="#contact" className="btn btn-secondary">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
