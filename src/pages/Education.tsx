import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

function Education() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 45%),
          linear-gradient(180deg, #020617, #020617)
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            mb={6}
            sx={{
              color: "#e5e7eb",
              letterSpacing: "1px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Education
          </Typography>
        </motion.div>

        {/* Timeline Wrapper */}
        <Box
          sx={{
            position: "relative",
            pl: { xs: 2, md: 4 },
            borderLeft: "2px solid rgba(56,189,248,0.25)",
          }}
        >
          {/* BCA */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionDot />

            <Typography variant="h5" fontWeight={700} color="#f8fafc">
              Bachelor in Computer Applications (BCA)
            </Typography>
            <Typography sx={subText}>
              Tribhuvan University • 2022 – 2026
            </Typography>

            <Typography sx={bodyText} mb={3}>
              Focused on software engineering, full-stack development, and core
              computer science concepts through hands-on academic projects.
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={sectionTitle}>
                  Key Courses
                </Typography>
                <List dense>
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Software Engineering",
                    "Web Technologies",
                    "Operating Systems",
                    "Computer Networks",
                  ].map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText primary={item} sx={listText} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={sectionTitle}>
                  Practical Exposure
                </Typography>
                <List dense>
                  {[
                    "Built CRUD-based web applications",
                    "Designed MySQL relational databases",
                    "Used Git & GitHub for version control",
                    "Applied SDLC & algorithms",
                  ].map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText primary={item} sx={listText} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ ...sectionTitle, mt: 3 }}>
              Academic Projects
            </Typography>
            <Stack spacing={1} mb={5}>
              {[
                "Pet Link System – Pet adoption and management platform",
                "Plagiarism Detection System – Text similarity analysis",
                "Advance Assignment System – Digital submission platform",
              ].map((p, i) => (
                <Typography key={i} sx={bodyText}>
                  • {p}
                </Typography>
              ))}
            </Stack>

            <Divider sx={dividerStyle} />
          </motion.div>

          {/* +2 */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionDot />

            <Typography variant="h5" fontWeight={700} color="#f8fafc">
              Higher Secondary Education (+2)
            </Typography>
            <Typography sx={subText}>
              National Examination Board • 2019 – 2021
            </Typography>
            <Typography sx={bodyText} mb={4}>
              Studied computer science and mathematics, strengthening logical
              thinking and problem-solving skills.
            </Typography>

            <Divider sx={dividerStyle} />
          </motion.div>

          {/* SEE */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionDot />

            <Typography variant="h5" fontWeight={700} color="#f8fafc">
              Secondary Education Examination (SEE)
            </Typography>
            <Typography sx={subText}>
              National Examination Board • 2019
            </Typography>
            <Typography sx={bodyText}>
              Built a disciplined academic foundation that led toward computer
              applications and software development.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Education;

/* ---------- Helpers ---------- */

const SectionDot = () => (
  <Box
    sx={{
      position: "absolute",
      left: "-7px",
      mt: "8px",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "#38bdf8",
      boxShadow: "0 0 12px rgba(56,189,248,0.6)",
    }}
  />
);

/* ---------- Styles ---------- */

const sectionTitle = {
  color: "#38bdf8",
  mb: 1,
};

const subText = {
  color: "rgba(255,255,255,0.6)",
  mb: 1.5,
};

const bodyText = {
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.7,
};

const listText = {
  color: "rgba(255,255,255,0.75)",
};

const dividerStyle = {
  my: 4,
  borderColor: "rgba(255,255,255,0.08)",
};
