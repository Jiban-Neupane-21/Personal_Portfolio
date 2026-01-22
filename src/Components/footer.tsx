import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type ContactItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};
function Footer() {
  const contactItems: ContactItem[] = [
    {
      icon: <EmailIcon />,
      label: "neupanejiban89@gmail.com",
      href: "mailto:neupanejiban89@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      label: "+977-9866586815",
      href: "tel:+9779866586815",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/neuzbadxhah/",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/Neuz-Badxhah",
    },
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      href: "https://www.facebook.com/neuzbadxhah",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://www.instagram.com/neuz_badxhah",
    },
  ];

  return (
    <Box
      component="footer"
      position="fixed"
      bottom={0}
      sx={{
        width: "100%",
        p: 4,
        background: `
          radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 40%),
          linear-gradient(135deg, #020617, #0f172a)
        `,
        color: "#e0e0e0",
        borderTop: "1px solid rgba(0, 255, 255, 0.2)",
        mt: 10,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#00f0ff",
          fontWeight: 700,
          mb: 3,
          letterSpacing: 1,
        }}
      >
        Contact Me
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        flexWrap="wrap"
        alignItems="center"
      >
        {contactItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            underline="none"
            sx={{
              display: "flex",
              flex: "1 1 auto",
              alignItems: "center",
              gap: 1,
              color: "#e0e0e0",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#00c8ffa3",
                transform: "translateY(-3px)",
              },
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": { color: "#00f0ff", transform: "scale(1.2)" },
                p: 0,
                mr: 0.5,
              }}
            >
              {item.icon}
            </IconButton>
            <Typography sx={{ fontSize: "0.9rem" }}>{item.label}</Typography>
          </Link>
        ))}
      </Stack>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", opacity: 0.6, fontSize: "0.8rem" }}
      >
        &copy; 2026 Neuz Badxhah. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
