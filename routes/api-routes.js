const Router = require("express").Router();
const db = require("../models");

// CREATE
// create a workout
Router.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    res.json(err);
  });
});

// READ
// get last workout
Router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    { 
    $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
    },
  },
  ])
  .then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    res.json(err);
  });
});

// get stats from workout
Router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
  { 
    $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" }
    }
  },
  { $limit: 7 }
  ])
  .then((stats) => {
    res.json(stats)
  })
  .catch ((err) => {
    res.json(err);
  });
});

// UPDATE
// continue a workout
Router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
  .then((workout) => {
    res.json(workout);
  })
  .catch ((err) => {
    res.json(err);
  });
});

module.exports = Router;