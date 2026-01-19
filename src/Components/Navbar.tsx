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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
              mb: 0.5,
              mx: 1,
              width: "auto",
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                backgroundColor: "rgba(225, 48, 108, 0.1)",
                color: "#e1306c",
                "& .MuiListItemIcon-root": {
                  color: "#e1306c",
                },
                "& .MuiListItemText-primary": {
                  fontWeight: "bold",
                },
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
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
          backgroundColor: "#131212",
          color: "#f9f1f1",
          borderBottom: "1px solid #dbdbdb",
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
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: "4px",
                  borderBottom: isActive ? "2px solid #fff" : "none",
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 200 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
