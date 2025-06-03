import {
  Card,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
  Box,
  Tooltip,
  Button
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const CourseCard = ({ course, onRegister, onToggleFavorite }) => {
  return (
<Card
  sx={{
    borderRadius: 3,
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Ensures full height inside Grid item
    width: "100%",  // Also needed for full width inside item
  }}
>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" display="flex" alignItems="center" gap={1}>
            {course.icon} {course.title}
          </Typography>
          {course.registered && (
            <Tooltip title="Mark as Favorite">
              <IconButton onClick={() => onToggleFavorite(course._id)}>
                {course.favorite ? (
                  <Star color="warning" />
                ) : (
                  <StarBorder />
                )}
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Typography
  variant="body2"
  sx={{
    my: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  }}
>
  {course.description}
</Typography>
          

        {course.registered ? (
          <>
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
          </>
        ) : (
          <Button
            variant="outlined"
            size="small"
            fullWidth
            onClick={() => onRegister(course)}
          >
            Register
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;