import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TerminalIcon from "@mui/icons-material/Terminal";

// --- Tech Category Type ---
interface TechCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}
function Blog() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        color: "#e0e0e0",
        fontFamily: "'Roboto Mono', monospace",
        background: `
          radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 40%),
          linear-gradient(135deg, #020617, #0f172a)
        `,
      }}
    >
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#00f0ff",
            letterSpacing: 3,
            fontWeight: 700,
          }}
        >
          CASE STUDY // 2026
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mt: 2,
            mb: 3,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#ffffff",
          }}
        >
          Outcode Nepal Branch Overview
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            opacity: 0.8,
            maxWidth: 650,
            mx: "auto",
          }}
        >
          Deep dive into the company, objectives, programming stack, and roles
          of Outcode Nepal.
        </Typography>
      </Box>

      {/* Introduction */}
      <SectionCard title="Introduction to Outcode LLC">
        <Typography sx={{ lineHeight: 1.8, opacity: 0.8 }}>
          Outcode LLC is a product-focused technology services company
          delivering high-quality software solutions, consulting, and support
          worldwide. Established in 2016 and headquartered in Draper, Utah, USA,
          with offices in Nepal & Peru, the company focuses on turning ideas
          into market-ready products.
        </Typography>
        <Typography sx={{ lineHeight: 1.8, opacity: 0.8, mt: 2 }}>
          Services include mobile & web development, UX/UI design, DevOps, QA,
          system architecture, and technical consulting. Flexible engagement
          models are available to suit diverse client needs.
        </Typography>
      </SectionCard>

      {/* Objectives */}
      <SectionCard title="Objectives of Outcode LLC">
        <List>
          {[
            "Deliver high-quality technology solutions for modern business challenges.",
            "Maximize client ROI by aligning tech with business goals.",
            "Provide flexible engagement models for diverse client needs.",
            "Promote innovation and sustainable long-term partnerships.",
            "Strengthen global presence and talent development.",
            "Ensure quality and process excellence through QA and DevOps.",
          ].map((text, i) => (
            <ListItem key={i} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#00f0ff", fontSize: 20 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ sx: { opacity: 0.8 } }}
              />
            </ListItem>
          ))}
        </List>
      </SectionCard>

      {/* Programmers & Roles */}
      <SectionCard title="Programmers & Roles at Outcode Nepal">
        <Typography sx={{ mb: 2, opacity: 0.8 }}>
          The Nepal branch employs Front-End, Back-End/Full-Stack, Mobile, QA,
          and E-Commerce developers.
        </Typography>
        <Grid container spacing={3}>
          <TechCategory
            title="Frontend / UI Developers"
            icon={<CodeIcon sx={{ color: "#00f0ff" }} />}
            skills={["React.js", "Angular", "HTML5", "CSS3", "TypeScript"]}
          />
          <TechCategory
            title="Backend / Full-Stack Developers"
            icon={<StorageIcon sx={{ color: "#00f0ff" }} />}
            skills={["Node.js", "Express.js", "JavaScript"]}
          />
          <TechCategory
            title="Mobile Developers"
            icon={<SmartphoneIcon sx={{ color: "#00f0ff" }} />}
            skills={["React Native", "Flutter", "Swift", "Kotlin"]}
          />
          <TechCategory
            title="E-Commerce Developers"
            icon={<TerminalIcon sx={{ color: "#00f0ff" }} />}
            skills={["Shopify (Liquid)", "WordPress", "jQuery"]}
          />
        </Grid>
      </SectionCard>

      {/* Summary */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography sx={{ opacity: 0.6 }}>
          Summary // Outcode Nepal Internship
        </Typography>
        <Typography
          sx={{ color: "#00f0ff", fontWeight: 700, mt: 1, cursor: "pointer" }}
        >
          CONTACT_ME →
        </Typography>
      </Box>
    </Box>
  );
}

// --- Section Card ---
const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box
    sx={{
      mb: 8,
      p: { xs: 3, md: 5 },
      borderRadius: "12px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(0,240,255,0.1)",
    }}
  >
    <Typography variant="h6" sx={{ color: "#00f0ff", fontWeight: 700, mb: 3 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

// --- Tech Category Card ---
const TechCategory: React.FC<TechCategoryProps> = ({ title, icon, skills }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Box
      sx={{
        p: 3,
        borderRadius: "12px",
        border: "1px solid rgba(0,240,255,0.1)",
        background: "rgba(255,255,255,0.02)",
        transition: "0.3s",
        "&:hover": {
          borderColor: "#00f0ff",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        {icon}
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 700, textTransform: "uppercase", color: "#00f0ff" }}
        >
          {title}
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {skills.map((skill) => (
          <Typography
            key={skill}
            sx={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "monospace" }}
          >
            {`> ${skill}`}
          </Typography>
        ))}
      </Box>
    </Box>
  </Grid>
);

export default Blog;
