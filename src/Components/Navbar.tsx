import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Blog", icon: <BookIcon />, path: "/blog" },
    { text: "Education", icon: <SchoolIcon />, path: "/education" },
    {
      text: "Projects",
      icon: <SystemSecurityUpdateGoodIcon />,
      path: "/projects",
    },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Jiban Neupane
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: "8px",
              width: "full",
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                width: "100%",
                backgroundColor: "rgba(58, 57, 62, 0.62)",
                color: "#fffafac4",
                "& .MuiListItemIcon-root": {
                  color: "#050505",
                },
                "& .MuiListItemText-primary": {
                  fontWeight: "bold",
                },
              },
              "&:hover": {
                backgroundColor: "rgba(91, 87, 87, 0.37)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background:
            "linear-gradient(180deg, rgba(20, 38, 56, 0.48), rgba(0, 0, 0, 0.6), transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#e1d8d8",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {" "}
        <Toolbar>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo and Name - Show on all screens */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src="./src/assets/images/logo.jpeg"
              alt="Profile"
              style={{
                width: "50px",
                borderRadius: "50%",
                marginRight: "50px",
                border: "2px solid white",
              }}
            />
          </Box>

          {/* Desktop nav links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "right",
              width: "100%",
              gap: "100px",
              paddingRight: "50px",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.path}
                style={({ isActive }) => ({
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: "4px",
                  borderBottom: isActive ? "2px solid #ccc8c8" : "none",
                })}
              >
                {item.icon}
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "fit-content",
            background:
              "linear-gradient(180deg, rgba(0,128,255,0.25), rgba(0,0,0,0.6), transparent)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: { xs: "0px", sm: "0px 20px 20px 0px" },
            boxShadow: "0 0 20px rgba(0,128,255,0.25)",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
