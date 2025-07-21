import React, { useEffect, useState } from "react";
import { Box, Drawer, List, ListItemButton, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {fetchCourseBySlug} from "../../api/Services"

const drawerWidth = 260;

const CoursePage = () => {
  const { slug, index = 1 } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [moduleIndex, setModuleIndex] = useState(Number(index));
  const [enableNext, setEnableNext] = useState(false);

 useEffect(() => {
    fetchCourseBySlug(slug)
      .then((data) => {
        setCourse(data);
      })
      .catch((err) => {
        console.error("Error loading course:", err);
      });
  }, [slug]);

  useEffect(() => {
    setModuleIndex(Number(index));
    setEnableNext(false);
  }, [index]);

  const module = course?.modules?.find((m) => m.index === moduleIndex);

  const handleNext = () => {
    // Optionally: call backend to update progress
    navigate(`/course/${slug}/${moduleIndex + 1}`);
  };

  const handlePrev = () => {
    navigate(`/course/${slug}/${moduleIndex - 1}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Typography variant="h6" sx={{ m: 2 }}>
          {course?.title}
        </Typography>
        <List>
          {course?.modules?.map((mod) => (
            <ListItemButton
              key={mod.index}
              selected={mod.index === moduleIndex}
              onClick={() => navigate(`/course/${slug}/${mod.index}`)}
            >
              {mod.title}
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {module?.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {module?.content}
        </Typography>

        {/* Video embed (optional) */}
        {module?.videoUrl && (
          <Box sx={{ mb: 4 }}>
            <iframe
              width="100%"
              height="315"
              src={module?.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        )}

        {/* Scroll detection */}
        <div id="bottom-sentinel" style={{ height: "1px" }} />

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={handlePrev} disabled={moduleIndex <= 1}>
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!enableNext || moduleIndex >= course?.modules.length}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CoursePage;