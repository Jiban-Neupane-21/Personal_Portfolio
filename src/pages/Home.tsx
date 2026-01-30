import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button, easing } from "@mui/material";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { useCursorGlow } from "../Components/useCursorGlor";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

export default function Home() {
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["Jiban Neupane"],
    loop: false,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  /* ================= VARIANTS ================= */

  const skillsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const skillCard = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, easing: easing.easeOut },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const titleVariant = {
    initial: { opacity: 0.6, x: 0 },
    hover: { opacity: 1, x: 6 },
  };

  const lineVariant = {
    initial: { width: 32 },
    hover: { width: "100%" },
  };
  const glow = useCursorGlow();

  /* ================= DATA ================= */

  const skills = [
    { title: "Frontend", skills: ["React", "TypeScript", "JavaScript", "MUI"] },
    { title: "Backend", skills: ["Node.js", "Express"] },
    { title: "Database", skills: ["MongoDB", "MySQL"] },
    { title: "Other", skills: ["Git", "GitHub", "Responsive UI"] },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 40%),
          linear-gradient(135deg, #020617, #0f172a)
        `,
        color: "#fff",
        px: { xs: 2, md: 6 },
        pt: 12,
      }}
    >
      {/* ================= HERO ================= */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          mb: 10,
        }}
      >
        <MotionPaper
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.06 }}
          sx={{
            width: 300,
            height: 300,
            borderRadius: "22px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 0 40px rgba(56,189,248,0.25)",
          }}
        >
          <Box
            component="img"
            src="./src/assets/images/profile.jpeg"
            alt="Jiban Neupane"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.5s",
              "&:hover": { transform: "scale(1.08)" },
            }}
          />
        </MotionPaper>

        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h3" fontWeight={800}>
            {text}
            <Cursor />
          </Typography>

          <Typography sx={{ color: "#94a3b8", mt: 1 }}>
            Frontend Developer • React • TypeScript
          </Typography>

          <Typography sx={{ mt: 2, maxWidth: 420, opacity: 0.8 }}>
            Crafting clean, scalable, and modern web interfaces with a focus on
            performance and user experience.
          </Typography>
        </Box>
      </MotionBox>

      {/* ================= SKILLS ================= */}

      <MotionBox
        variants={skillsContainer}
        initial="hidden"
        whileInView="visible"
        onMouseMove={glow.handleMouseMove}
        viewport={{ once: true }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mb: 10,
        }}
      >
        {skills.map((item) => (
          <MotionBox
            key={item.title}
            variants={skillCard}
            whileHover="hover"
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 21%" },
              position: "relative",
              px: 3,
              pt: 3,
              pb: 3.5,
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, rgba(0,240,255,0.04), transparent)",
              borderTop: "1px solid rgba(0,240,255,0.25)",
              borderBottom: "1px solid rgba(0,240,255,0.08)",
            }}
          >
            {/* Accent Line */}
            <MotionBox
              variants={lineVariant}
              transition={{ duration: 0.4 }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "2px",
                background: "#00f0ff",
                boxShadow: "0 0 12px rgba(0,240,255,0.6)",
              }}
            />

            {/* Title */}
            <MotionTypography
              variants={titleVariant}
              sx={{
                mb: 2.5,
                fontSize: "0.85rem",
                fontWeight: 800,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {item.title}
            </MotionTypography>

            {/* Skills */}
            <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap" }}>
              {item.skills.map((skill) => (
                <Typography
                  key={skill}
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    color: "#00f0ff",
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "4px",
                    background: "rgba(0,240,255,0.06)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(0,240,255,0.2)",
                      color: "#fff",
                      boxShadow: "0 0 10px rgba(0,240,255,0.5)",
                    },
                  }}
                >
                  {`> ${skill}`}
                </Typography>
              ))}
            </Box>
          </MotionBox>
        ))}
      </MotionBox>

      <Box
        sx={{
          p: { xs: 2, md: 4 },
          mb: 6,
          // Removed heavy background/borders for a cleaner look
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={4}
          sx={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "0.9rem", // Small & sleek header
          }}
        >
          Featured Projects
        </Typography>

        {[
          {
            title: "Advanced Assignment Management",
            description:
              "Platform for teachers to assign tasks and students to submit assignments digitally.",
          },
          {
            title: "Pet Link",
            description:
              "Social platform for pet lovers to connect, share, and explore pet-friendly places.",
          },
        ].map((project, index) => (
          <Box
            key={project.title}
            sx={{
              mb: 4,
              position: "relative",
              pl: 3, // Space for the accent line
              transition: "all 0.3s ease",
              // opacity: ,
              animation: "fadeUp 0.6s ease forwards",
              animationDelay: `${index * 0.2}s`,
              borderLeft: "2px solid rgba(0, 240, 255, 0.1)",
              "&:hover": {
                borderLeft: "2px solid #00f0ff",
                transform: "translateX(10px)", // Slight slide right instead of scale
              },
            }}
          >
            <Typography
              fontWeight="600"
              sx={{
                color: "#f6f9fa",
                mb: 0.5,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                textShadow: "0 0 10px rgba(69, 100, 102, 0.3)",
              }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{
                opacity: 0.7,
                color: "white",
                maxWidth: "600px",
                lineHeight: 1.6,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              {project.description}
            </Typography>
          </Box>
        ))}

        {/* CTA */}
        <Box textAlign="center">
          <Button
            onClick={() => navigate("/projects")}
            sx={{
              color: "#00c6ff",
              fontWeight: 600,
              "&:hover": { color: "#fff" },
            }}
          >
            View All Projects →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
