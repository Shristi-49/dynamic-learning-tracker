// src/pages/layout/LeftNav.jsx
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Divider,
} from "@mui/material";
import { Home, Article } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 220;
const collapsedWidth = 72;

const LeftNav = ({ drawerOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <Home />, path: "/" },
    { label: "Resume", icon: <Article />, path: "/resume" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.3s",
        [`& .MuiDrawer-paper`]: {
          width: drawerOpen ? drawerWidth : collapsedWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Divider />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {drawerOpen && <ListItemText primary={item.label} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftNav;