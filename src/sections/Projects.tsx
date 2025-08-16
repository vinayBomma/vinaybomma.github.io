import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and user authentication.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "project1.jpg",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A task management application with drag and drop functionality, task categorization, and progress tracking.",
      technologies: ["React", "TypeScript", "Redux", "Firebase"],
      image: "project2.jpg",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data for multiple cities.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "project3.jpg",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects, skills, and contact information.",
      technologies: ["React", "TypeScript", "CSS"],
      image: "project4.jpg",
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've worked on recently:
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="btn small-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="btn small-btn secondary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
