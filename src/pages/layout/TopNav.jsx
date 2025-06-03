// src/pages/layout/TopNav.jsx
import {useState} from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopNav = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
 const [username] = useState("Shristi");
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          SkillOps
        </Typography>
      
      
      <Avatar
        alt={username}
        sx={{ bgcolor: "#ff7043", width: 40, height: 40 }}
      >SK</Avatar>
      
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;