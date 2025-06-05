const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
  updateProgress
} = require("../controllers/goalController");

router.get("/", getGoals);
router.post("/", addGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

// PUT /api/goals/:id/progress
router.put('/:id/progress', updateProgress);


module.exports = router;