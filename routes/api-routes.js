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

Router.get("/api/someRoute", (req, res) => {
    res.send("Work pls");
});

module.exports = Router;