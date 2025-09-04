import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "SQL", "Python"],
    },
    {
      title: "Frameworks",
      skills: [
        "React",
        "React Native",
        "Node.js",
        "Vue.js",
        "Next.js",
        "Tailwind",
        "GraphQL",
        "MongoDB",
        "AWS",
        "Expo",
        "PWA",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-primary/95 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">Technologies I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-primary/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-accent/10 dark:bg-accent/20 p-3 flex items-center border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-accent dark:text-accent">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-full text-lightText dark:text-darkText text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
