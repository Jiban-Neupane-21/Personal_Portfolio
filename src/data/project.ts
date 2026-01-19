// src/data/projectsData.ts

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;

}

const projects: Project[] = [
  {
    title: "Advance_Assignment",
    description: "A platform for teachers to assign tasks and students to submit assignments.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Neuz-Badxhah/Advance_Assignment",
  },
  {
    title: "plagrishm_detector",
    description: "Detects plagiarism in text using ML and Flask backend.",
    tech: ["Python", "Flask", "ML"],
    github: "https://github.com/Neuz-Badxhah/plagrishm_detector",
  },
  {
    title: "PetLink-with-Khalti",
    description: "A pet adoption platform integrated with Khalti payment system.",
    tech: ["React", "JavaScript", "Khalti API"],
    github: "https://github.com/Neuz-Badxhah/PetLink-with-Khalti",
  }
];

export default projects;
