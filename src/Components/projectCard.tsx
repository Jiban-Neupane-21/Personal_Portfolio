// src/Components/projectCard.tsx
import React, { type JSX } from "react";
import { Box, Typography, Chip, Stack, Link, Tooltip } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
}

const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact style={{ color: "#61DBFB" }} />,
  JavaScript: <FaJs style={{ color: "#F0DB4F" }} />,
  HTML: <FaHtml5 style={{ color: "#E34C26" }} />,
  CSS: <FaCss3 style={{ color: "#264de4" }} />,
  Python: <FaPython style={{ color: "#306998" }} />,
  PHP: <RiPhpFill style={{ color: "#787CB5" }} />,
  "Khalti API": <TbApi style={{ color: "#00BFFF" }} />,
  NodeJS: <FaNodeJs style={{ color: "#68A063" }} />,
  ML: <FaPython style={{ color: "#306998" }} />, // use Python icon for ML
  Flask: <FaPython style={{ color: "#000000" }} />, // placeholder
};
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  github,
}) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(0,240,255,0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        "&:hover": {
          borderColor: "#00f0ff",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{ color: "#00f0ff", fontWeight: 700, mb: 1 }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "0.9rem", opacity: 0.8, mb: 2 }}>
          {description}
        </Typography>

        <Stack direction="row" sx={{ spacing: 1, flexWrap: "wrap" }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              icon={techIcons[tech]}
              label={tech}
              size="small"
              sx={{ color: "#00f0ff", borderColor: "#00f0ff", mb: 0.5 }}
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>

      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {github && (
          <Tooltip title="Advance Assignment GitHub" arrow placement="right" sx={{font: "menu"}}>
            <Link
              href={github}
              target="_blank"
              sx={{
                color: "#00f0ff",
                display: "inline-flex",
                transition: "transform 0.2s",
              }}
            >
              <GitHub fontSize="large" />
            </Link>
          </Tooltip >
        )}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
