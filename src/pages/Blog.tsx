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
import { motion } from "framer-motion";

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

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
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
          INTERNSHIP JOURNEY
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
          Internship in Outcode LLC Nepal
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
          of Outcode LLC Nepal.
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
                slotProps={{
                  primary: {
                    sx: { opacity: 0.8 },
                  },
                }}
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

      {/* Internship Experience */}
      <SectionCard title="My Internship Experience at Outcode Nepal">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }, // stagger all paragraphs
          }}
        >
          {[
            "During my internship at Outcode LLC Nepal, I gained hands-on experience working in a professional software development environment. The internship allowed me to bridge the gap between academic knowledge and real-world application development.",
            "I primarily worked on front-end development using modern JavaScript frameworks and UI libraries. I was involved in building reusable components, implementing responsive layouts, and improving user interface consistency across different modules of the application.",
            "Throughout the internship, I collaborated with senior developers, followed Agile development practices, and used tools such as Git for version control. Code reviews and feedback sessions helped me improve my coding standards, problem-solving ability, and understanding of scalable application design.",
            "The internship also enhanced my soft skills, including teamwork, communication, and time management. Overall, my experience at Outcode Nepal was both challenging and rewarding, and it significantly contributed to my growth as a software developer.",
          ].map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Typography
                sx={{ lineHeight: 1.8, opacity: 0.8, mt: index === 0 ? 0 : 2 }}
              >
                {paragraph}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </SectionCard>

      {/* Summary */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography sx={{ opacity: 0.6 }}>Outcode Nepal Internship</Typography>
        <Typography
          sx={{ color: "#00f0ff", fontWeight: 700, mt: 1, cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.outcodesoftware.com/", "_blank")
          }
        >
          Visit Outcode official website →
        </Typography>
      </Box>
    </Box>
  );
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          mb: 8,
          p: { xs: 3, md: 5 },
          borderRadius: "12px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(0,240,255,0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#00f0ff", fontWeight: 700, mb: 3 }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </motion.div>
  );
}

// --- Tech Category Card ---
function TechCategory({ title, icon, skills }: TechCategoryProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
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
          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 2, alignItems: "center" }}
          >
            {icon}
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#00f0ff",
              }}
            >
              {title}
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {skills.map((skill) => (
              <Typography
                key={skill}
                sx={{
                  fontSize: "0.75rem",
                  opacity: 0.8,
                  fontFamily: "monospace",
                }}
              >
                {`> ${skill}`}
              </Typography>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default Blog;
