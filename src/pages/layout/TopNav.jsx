// src/pages/layout/TopNav.jsx
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopNav = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
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
          Dynamic Learning
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;