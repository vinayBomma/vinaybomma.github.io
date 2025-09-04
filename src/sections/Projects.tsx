import React, { useState } from "react";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  codeUrl?: string;
  hasCode: boolean;
}

const Projects: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Socio",
      description:
        "A social habit tracker app that helps users build and maintain healthy habits with social accountability features.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Gemini API",
      ],
      image: "socio.png",
      liveUrl:
        "https://drive.google.com/drive/u/2/folders/1VQE4JWufd7rnr2ECZTlAjie6WIyaT7vU",
      codeUrl: "#",
      hasCode: false,
    },
    {
      id: 2,
      title: "Toki",
      description:
        "A journaling app that helps users document their thoughts, experiences, and memories with rich text formatting.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
      ],
      image: "toki.png",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.vinaybomma.toki",
      codeUrl: "#",
      hasCode: false,
    },
    {
      id: 3,
      title: "Hashnode on VSCode",
      description:
        "A VS Code extension that allows developers to read and write Hashnode blog posts directly from their code editor.",
      technologies: ["TypeScript", "VS Code API", "Hashnode API"],
      image: "hashnode.png",
      liveUrl:
        "https://marketplace.visualstudio.com/items?itemName=VinayBomma.hashnode-on-vscode",
      codeUrl: "https://github.com/vinayBomma/hashnode-vscode",
      hasCode: true,
    },
    {
      id: 4,
      title: "Twister",
      description:
        "A tongue twister app designed to help users improve their pronunciation and speech clarity through fun exercises.",
      technologies: ["React Native", "Typescript", "Firebase", "Python"],
      image: "twister.jpg",
      liveUrl:
        "https://drive.google.com/drive/u/2/folders/1VQE4JWufd7rnr2ECZTlAjie6WIyaT7vU",
      codeUrl: "#",
      hasCode: false,
    },
    {
      id: 5,
      title: "Attend It",
      description:
        "An attendance tracking application that simplifies the process of recording and analyzing attendance data.",
      technologies: ["Vuejs", "Firebase", "PWA", "Trusted Web Activities"],
      image: "attendit.png",
      liveUrl: "https://attendit.web.app/signup",
      codeUrl: "https://github.com/vinayBomma/attLog",
      hasCode: true,
    },
    {
      id: 6,
      title: "Portfolio",
      description:
        "A responsive portfolio website showcasing my projects, skills, and contact information.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "portfolio.png",
      liveUrl: "#",
      codeUrl: "#",
      hasCode: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-primary/90 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">Some of my personal projects</p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-primary/50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col max-w-md mx-auto w-full"
            >
              <div className="h-56 bg-gray-100 dark:bg-gray-800/50 relative flex items-center justify-center overflow-hidden group">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="max-w-[45%] max-h-[90%] object-contain cursor-pointer transition-transform group-hover:scale-105 z-10"
                  onClick={() => {
                    const imgSrc = `/${project.image}`;
                    setEnlargedImage(imgSrc);
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 z-20 pointer-events-none">
                  <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-0">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between gap-4 mt-auto pt-2">
                  <a
                    href={project.liveUrl || "#"}
                    className={`text-center px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium rounded-md transition-colors duration-300 border border-accent ${
                      project.hasCode ? "w-1/2" : "w-full"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  {project.hasCode && (
                    <a
                      href={project.codeUrl || "#"}
                      className="w-1/2 text-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors duration-300 border border-gray-300 dark:border-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={enlargedImage}
              alt="Enlarged project"
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedImage(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
