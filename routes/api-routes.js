const Router = require("express").Router();
const db = require("../models");

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
    }
});

Router.get("/api/workouts/range", async (req, res) => {
    try {
      const stats = await db.Workout.aggregate([
        { 
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
            totalWeight: { $sum: "$exercises.weight" }
        },
      },
     ])
     res.send(stats);
    } catch (err) {
      throw new Error(err);
    }
});

module.exports = Router;