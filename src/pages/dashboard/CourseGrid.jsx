import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, onRegister, onToggleFavorite }) => (
  <Grid container spacing={3}>
    {courses.map((course) => (
      <Grid
        item
        key={course.title}
        xs={12}
        sm={6}
        md={4}
        xl={3}
        sx={{ display: "flex" }}  
      >
        <CourseCard
          course={course}
          onRegister={onRegister}
          onToggleFavorite={onToggleFavorite}
        />
      </Grid>
    ))}
  </Grid>
);

export default CourseGrid;