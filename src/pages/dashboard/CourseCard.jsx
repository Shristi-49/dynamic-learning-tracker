// src/pages/Dashboard/CourseCard.jsx
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
  Box,
  Tooltip,
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const CourseCard = ({ course, onToggleFavorite }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">
            {course.icon} {course.title}
          </Typography>
          <Tooltip title="Mark as Favorite">
            <IconButton onClick={() => onToggleFavorite(course.id)}>
              {course.favorite ? <Star color="warning" /> : <StarBorder />}
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body2" sx={{ my: 1 }}>
          {course.description}
        </Typography>
        <Box>
          <LinearProgress
            variant="determinate"
            value={course.progress}
            sx={{ height: 8, borderRadius: 5 }}
          />
          <Typography
            variant="caption"
            display="block"
            textAlign="right"
            sx={{ mt: 0.5 }}
          >
            {course.progress}% complete
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;