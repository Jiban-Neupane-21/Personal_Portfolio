import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";


export default function Home() {
  const navigate = useNavigate();

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
        borderRadius: "10px",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
          gap: 4,
          mb: 8,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: 300,
            height: 300,
            mx: "auto",
            mb: 3,
            float: "right",
            borderRadius: "20px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            ":hover": {
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            },
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
              borderRadius: "20px",
            }}
          />
        </Paper>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: "3px solid #00c6ff",
            width: "0",
            animation:
              "typing 2.5s steps(14, end) forwards, blink 0.7s infinite",
            "@keyframes typing": {
              from: { width: "0" },
              to: { width: "14ch" }, // number of characters
            },
            "@keyframes blink": {
              "0%": { borderColor: "transparent" },
              "50%": { borderColor: "#00c6ff" },
              "100%": { borderColor: "transparent" },
            },
          }}
        >
          Jiban Neupane
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            opacity: 0,
            mb: 2,
            animation: "fadeUp 1.8s ease forwards",
            animationDelay: "2.8s",
            "@keyframes fadeUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 0.85,
                transform: "translateY(0)",
              },
            },
          }}
        >
          Frontend Developer • React • TypeScript
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            opacity: 0.8,
          }}
        >
          Frontend Developer focused on building responsive and user-friendly
          web applications using React and TypeScript. I enjoy creating clean UI
          designs, learning new technologies, and turning ideas into real-world
          digital experiences.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4, // Increased gap for a more airy feel
          mb: 8,
        }}
      >
        {[
          {
            title: "Frontend",
            skills: ["React", "TypeScript", "JavaScript", "MUI"],
          },
          { title: "Backend", skills: ["Node.js", "Express"] },
          { title: "Database", skills: ["MongoDB", "MySQL"] },
          { title: "Other", skills: ["Git", "GitHub", "Responsive UI"] },
        ].map((item, index) => (
          <Box
            key={item.title}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 21%" },
              position: "relative",
              p: 3,
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: 0,
              animation: "fadeUp 0.8s ease forwards",
              animationDelay: `${index * 0.15}s`,

              // Stylish Techie Border: Only top and bottom with a slight glow
              borderTop: "1px solid rgba(0, 240, 255, 0.2)",
              borderBottom: "1px solid rgba(0, 240, 255, 0.05)",
              background:
                "linear-gradient(180deg, rgba(0,240,255,0.03) 0%, rgba(0,0,0,0) 100%)",

              "&:hover": {
                transform: "translateY(-5px)",
                borderTop: "1px solid #75a0a3c9",
                background:
                  "linear-gradient(180deg, rgba(0,240,255,0.08) 0%, rgba(0,0,0,0) 10%)",
                "& .tech-line": { width: "100%" },
              },
            }}
          >
            {/* Animated accent line that grows on hover */}
            <Box
              className="tech-line"
              sx={{
                position: "absolute",
                top: -1,
                left: 0,
                height: "2px",
                width: "30px",
                background: "#46cbdfaa",
                boxShadow: "1 1 5px #9eb8eb",
                transition: "width 0.4s ease",
              }}
            />

            <Typography
              fontWeight="800"
              mb={2.5}
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)", // Subdued title
              }}
            >
              {item.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              {item.skills.map((skill) => (
                <Typography
                  key={skill}
                  sx={{
                    fontSize: "0.9rem",
                    color: "#00f0ff",
                    fontWeight: "500",
                    fontFamily: "monospace",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "4px",
                    background: "rgba(0, 240, 255, 0.05)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(0, 240, 255, 0.2)",
                      color: "#fff",
                    },
                  }}
                >
                  {`> ${skill}`}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* ================= PROJECTS SECTION ================= */}
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
              opacity: 0,
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

        <Box sx={{ mt: 6 }}>
          <Button
            onClick={() => navigate("/projects")}
            sx={{
              p: 0,
              color: "#00c6ff",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "1rem",
              "&:hover": {
                background: "transparent",
                color: "#fff",
                "& .arrow": { transform: "translateX(5px)" },
              },
            }}
          >
            View All Projects{" "}
            <span
              className="arrow"
              style={{ transition: "0.3s", marginLeft: "8px" }}
            >
              →
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
