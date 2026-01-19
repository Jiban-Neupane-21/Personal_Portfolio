// src/pages/ProjectsPage.tsx
import React from "react";
import projects from "../data/project";
import ProjectCard from "../Components/projectCard";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>
        Here are some of my coding projects demonstrating web development and ML
        skills.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
