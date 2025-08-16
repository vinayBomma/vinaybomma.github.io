import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Frameworks",
      skills: [
        "React",
        "Node.js",
        "Express",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Docker"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-primary/95 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">
          Here are some of the technologies and tools I've been working with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-primary/50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span className="text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
