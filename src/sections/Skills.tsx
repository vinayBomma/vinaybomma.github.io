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
      className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-primary/95"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">How I build</h2>
        <p className="section-description">
          The stack changes by product, but I usually work across mobile, web,
          backend, and AI-assisted workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center border-b border-gray-100 bg-accent/10 p-4 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold text-accent dark:text-accent">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="rounded-full border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-lightText shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-darkText"
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
