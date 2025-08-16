import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-primary/95 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-md mx-auto lg:mx-0">
            {/* Replace with your image */}
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-300 text-xl font-medium">
              Your Photo
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Hello! I'm a passionate web developer with a strong foundation in
              creating responsive and user-friendly websites. I enjoy solving
              complex problems and turning ideas into reality through elegant
              code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My journey in web development started several years ago, and I've
              been constantly learning and improving my skills. I believe in
              writing clean, maintainable code and creating applications that
              provide great user experiences.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex">
                <span className="font-semibold w-28 text-gray-900 dark:text-white">
                  Name:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Your Name
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 text-gray-900 dark:text-white">
                  Email:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  your.email@example.com
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 text-gray-900 dark:text-white">
                  Location:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Your City, Country
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 text-gray-900 dark:text-white">
                  Availability:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Available for freelance
                </span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary mt-8 inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
