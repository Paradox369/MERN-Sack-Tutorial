const express = require("express");
const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// protecting workout routes
router.use(requireAuth);

// get all workouts
router.get("/", getAllWorkouts);
// get single workout
router.get("/:id", getSingleWorkout);
// post a workout
router.post("/", createWorkout);
// delete a workout
router.delete("/:id", deleteWorkout);
// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
