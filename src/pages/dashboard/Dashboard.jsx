// src/pages/Dashboard/Dashboard.jsx
import { useState } from "react";
import GreetingBanner from "./GreetingBanner";
import CourseGrid from "./CourseGrid";
import { Code, Javascript, Memory } from "@mui/icons-material";

const Dashboard = () => {
  const [username] = useState("Shristi");


const [courses, setCourses] = useState([
  {
    id: 1,
    title: "React",
    icon: <Code color="primary" />,
    description: "Track your journey with modern React stack.",
    progress: 60,
    favorite: false,
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <Javascript sx={{ color: '#f7df1e' }} />,
    description: "Master the fundamentals and advanced JS.",
    progress: 45,
    favorite: true,
  },
  {
    id: 3,
    title: "Data Structures",
    icon: <Memory color="secondary" />,
    description: "Sharpen problem-solving with DSA patterns.",
    progress: 30,
    favorite: false,
  },
]);

  const toggleFavorite = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, favorite: !course.favorite } : course
    );
    setCourses(updatedCourses);
  };

  return (
    <>
      <GreetingBanner username={username} />
      <CourseGrid courses={courses} onToggleFavorite={toggleFavorite} />
    </>
  );
};

export default Dashboard;