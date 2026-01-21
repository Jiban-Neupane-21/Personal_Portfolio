// src/pages/ProjectsPage.tsx
import { useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

import ProjectCard from "../Components/projectCard";
import Project from "../data/project";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
}
function ProjectsPage() {
  const [projects] = useState<Project[]>(Project);
  const [loading] = useState(false);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
        color: "#e0e0e0",
        background: `linear-gradient(135deg, #020617, #0f172a)`,
        minHeight: "100vh",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="overline"
          sx={{ color: "#00f0ff", letterSpacing: 3, fontWeight: 700 }}
        >
          MY WORK
        </Typography>
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: 900, mt: 2 }}>
          Projects & Experiments
        </Typography>
        <Typography sx={{ opacity: 0.7, mt: 1, maxWidth: 600, mx: "auto" }}>
          Showcasing my web development, React, and ML skills through hands-on
          projects.
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <CircularProgress sx={{ color: "#00f0ff" }} />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ProjectsPage;
