// src/pages/Dashboard/CourseGrid.jsx
import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, onToggleFavorite }) => (
  <Grid container spacing={3}>
    {courses.map((course) => (
      <Grid item xs={12} sm={6} md={4} key={course.id}>
        <CourseCard course={course} onToggleFavorite={onToggleFavorite} />
      </Grid>
    ))}
  </Grid>
);

export default CourseGrid;