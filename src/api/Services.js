import axios from "axios";

const API_BASE = "http://localhost:3001/api/goals";

export const getGoals = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const addGoal = async (goal) => {
  const res = await axios.post(API_BASE, goal);
  return res.data;
};

export const updateGoal = async (id, updates) => {
  const res = await axios.put(`${API_BASE}/${id}`, updates);
  return res.data;
};

export const deleteGoal = async (id) => {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
};