import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

function Education() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 40%),
          linear-gradient(135deg, #020617, #0f172a)
        `,
      }}
    >
      {/* Tech Grid Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // backgroundImage: `
          //   linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          //   linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          // `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <Container maxWidth="lg" sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={5}
          sx={{ color: "#e5e7eb", letterSpacing: "0.5px" }}
        >
          Education
        </Typography>

        {/* BCA */}
        <Card
          sx={{
            mb: 4,
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={600} color="#f8fafc">
              Bachelor in Computer Applications (BCA)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}
            >
              Tribhuvan University • 2022 – 2026
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 3 }}>
              Pursuing a Bachelor of Computer Applications with a strong focus
              on software development, web technologies, and computer science
              fundamentals through practical projects and labs.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="#e5e7eb" gutterBottom>
                  Key Courses
                </Typography>
                <List dense>
                  {[
                    "Software Engineering",
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Web Technologies",
                    "Operating Systems",
                    "Networking",
                    "Java Programming",
                    "Mobile Application Development",
                  ].map((course, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText
                        primary={course}
                        primaryTypographyProps={{
                          color: "rgba(255,255,255,0.75)",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="#e5e7eb" gutterBottom>
                  Practical Exposure
                </Typography>
                <List dense>
                  {[
                    "Developed CRUD-based web applications",
                    "Designed databases using MySQL",
                    "Applied SDLC concepts and algorithms",
                    "Used Git & GitHub for version control",
                  ].map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          color: "rgba(255,255,255,0.75)",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

            <Typography variant="h6" color="#e5e7eb" gutterBottom>
              Academic Projects
            </Typography>
            <Stack spacing={1}>
              <Typography color="rgba(255,255,255,0.8)">
                <strong>Pet Link System:</strong> Pet adoption and management
                platform
              </Typography>
              <Typography color="rgba(255,255,255,0.8)">
                <strong>Plagiarism Detection System:</strong> File upload and
                text comparison system
              </Typography>
              <Typography color="rgba(255,255,255,0.8)">
                <strong>Advance Assignment System:</strong> Digital assignment
                management application
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {/* +2 */}
        <Card
          sx={{
            mb: 4,
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={600} color="#f8fafc">
              +2 (Higher Secondary Education)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}
            >
              National Examination Board • 2019 – 2021
            </Typography>
            <Typography color="rgba(255,255,255,0.8)">
              Focused on computer studies and mathematics, building logical
              thinking and early programming skills.
            </Typography>
          </CardContent>
        </Card>

        {/* SEE */}
        <Card
          sx={{
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={600} color="#f8fafc">
              SEE (Secondary Education Examination)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}
            >
              National Examination Board • 2019
            </Typography>
            <Typography color="rgba(255,255,255,0.8)">
              Built a strong academic base and discipline for higher education
              in computer applications.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Education;
