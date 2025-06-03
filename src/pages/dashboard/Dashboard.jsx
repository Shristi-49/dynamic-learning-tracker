import { useEffect, useState } from "react";
import GreetingBanner from "./GreetingBanner";
import CourseGrid from "./CourseGrid";
import {
  getGoals,
  addGoal,
  updateGoal
} from "../../api/Services";
import axios from "axios";

const Dashboard = () => {
  const [username] = useState("Shristi");
  const [availableCourses, setAvailableCourses] = useState([]);
  const [enrolledGoals, setEnrolledGoals] = useState([]);

  useEffect(() => {
    (async () => {
      const [coursesRes, goalsRes] = await Promise.all([
        axios.get("http://localhost:3001/api/courses"),
        getGoals()
      ]);
      setAvailableCourses(coursesRes.data);
      setEnrolledGoals(goalsRes);
    })();
  }, []);

  const handleRegister = async (course) => {
    const newGoal = {
      title: course.title,
      category: "Learning",
      description: course.description,
      progress: 0,
      favorite: false
    };
    const saved = await addGoal(newGoal);
    setEnrolledGoals([...enrolledGoals, saved]);
  };

  const handleToggleFavorite = async (id) => {
    const updated = await updateGoal(id, {
      favorite: !enrolledGoals.find((g) => g._id === id).favorite
    });
    setEnrolledGoals(
      enrolledGoals.map((g) => (g._id === id ? updated : g))
    );
  };

  // Merge logic
  const mergedCourses = availableCourses.map((course) => {
    const match = enrolledGoals.find((g) => g.title === course.title);
    return {
      ...course,
      _id: match?._id,
      progress: match?.progress,
      favorite: match?.favorite,
      registered: !!match
    };
  });

  return (
    <>
      <GreetingBanner username={username} />
      <CourseGrid
        courses={mergedCourses}
        onRegister={handleRegister}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
};

export default Dashboard;