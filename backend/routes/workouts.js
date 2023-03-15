const express = require("express");
const workoutModel = require("../models/workoutModel");
const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "get all workouts" });
});
// get single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get single workout" });
});
// post a workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});
// update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

module.exports = router;
