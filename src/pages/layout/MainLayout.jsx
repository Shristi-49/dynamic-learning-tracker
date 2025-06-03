import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material"; import TopNav from "./TopNav"; import LeftNav from "./LeftNav"; import { useState } from "react";

const MainLayout = ({ children }) => { const [drawerOpen, setDrawerOpen] = useState(true);

return ( <Box sx={{ display: "flex" }}> <CssBaseline /> <TopNav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} /> <LeftNav drawerOpen={drawerOpen} /> <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f4f6f8", p: 3, transition: "margin-left 0.3s" }} > <Toolbar /> {children} </Box> </Box> ); };

export default MainLayout;



