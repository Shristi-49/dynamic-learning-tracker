import axios from "axios";

//for localhost 
// const API_BASE = "http://localhost:3001/api/goals";
const API_BASE = process.env.REACT_APP_API_BASE;
const goalService = `${API_BASE}/api/goals`;
const coursesService = `${API_BASE}/api/courses`;


export const getGoals = async () => {
  const res = await axios.get(goalService);
  return res.data;
};

export const addGoal = async (goal) => {
  const res = await axios.post(goalService, goal);
  return res.data;
};

export const updateGoal = async (id, updates) => {
  const res = await axios.put(`${goalService}/${id}`, updates);
  return res.data;
};

export const deleteGoal = async (id) => {
  const res = await axios.delete(`${goalService}/${id}`);
  return res.data;
};

export const getCourses = async () => {
  const res = await axios.get(coursesService);
  return res.data;
};