const Router = require("express").Router();
const db = require("../models");

// // CREATE
// // create a workout
// Router.post("/api/workouts", async (req, res) => {
//   try {
//     const newWorkout = await db.Workout.create({});
//     res.json(newWorkout);
//     //console.log(newExercise);
//   } catch (err) {
//       throw new Error(err);
//   };
// });

// // READ
// // get last workout
// Router.get("/api/workouts", async (req, res) => {
//     try {
//       const workouts = await db.Workout.aggregate([
//         { 
//         $addFields: {
//             totalDuration: { $sum: "$exercises.duration" }
//         },
//       },
//       ])
//       res.json(workouts);
//     } catch (err) {
//       throw new Error(err);
//     };
// });

// // get stats from workout
// Router.get("/api/workouts/range", async (req, res) => {
//     try {
//       const stats = await db.Workout.aggregate([
//         { 
//             $addFields: {
//                 totalDuration: { $sum: "$exercises.duration" },
//                 totalWeight: { $sum: "$exercises.weight" }
//             },
//         },
//         { $limit: 7 }
//       ])
//       res.json(stats);
//     } catch (err) {
//       throw new Error(err);
//     };
// });

// // UPDATE
// // continue a workout
// Router.put("/api/workouts/:id", async (req, res) => {
//   try {
//     console.log(req.body);
//     let { id } = req.params;
//     const updatedExercise = await db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } }, { new: true });
//     res.json(updatedExercise);
//     //console.log(newExercise);
//   } catch (err) {
//       throw new Error(err);
//   };
// });

// CREATE
// create a workout
Router.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then(workout => {
    res.json(workout);
  })
  .catch(err => {
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
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
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
    },
  },
  { $limit: 7 }
  ])
  .then(stats => {
    res.json(stats)
  })
  .catch (err => {
    res.json(err);
  });
});

// UPDATE
// continue a workout
Router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  let { id } = req.params;
  db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } }, { new: true })
  .then(workout => {
    res.json(workout);
  })
  .catch (err => {
    res.json(err);
  });
});

module.exports = Router;