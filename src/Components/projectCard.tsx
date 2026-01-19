// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "../data/project";
const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tech,
  github,
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((t: string) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
