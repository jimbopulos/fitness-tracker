const Router = require("express").Router();
const db = require("../models");

// CREATE
// create a workout
Router.post("/api/workouts", async ({ body }, res) => {
    try {
        const newWorkout = await db.Workout.create(body);
        res.send(newWorkout);
        console.log(newWorkout);
    } catch (err) {
        throw new Error(err);
    };
});

// READ
// get last workout
Router.get("/api/workouts", async (req, res) => {
    try {
      const workouts = await db.Workout.aggregate([
        { 
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        },
      },
     ])
     res.send(workouts);
    } catch (err) {
      throw new Error(err);
    };
});

// get stats from workout
Router.get("/api/workouts/range", async (req, res) => {
    try {
      const stats = await db.Workout.aggregate([
        { 
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
                totalWeight: { $sum: "$exercises.weight" }
            },
        },
        { $limit: 7 }
     ])
     res.send(stats);
    } catch (err) {
      throw new Error(err);
    };
});

// UPDATE

// DELETE


module.exports = Router;