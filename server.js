// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// const db = require("./models");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware (post request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static folder
app.use(express.static("public"));

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));

// CREATE

// READ
// // route to retrieve last workout
// app.get("/api/workouts", (req, res) => {
//   db.Workout.aggregate( [
//     { 
//     $addFields: {
//     totalDuration: { $sum: "$exercises.duration" }
//     }
//   },
//  ] ).then(data => res.json(data));
// });

// // route to retrieve last workout
// app.get("/api/workouts", async (req, res) => {
//   try {
//     const workouts = await db.Workout.aggregate([
//       { 
//       $addFields: {
//       totalDuration: { $sum: "$exercises.duration" }
//       },
//     },
//    ])
//    res.send(workouts);
//   } catch (err) {
//     throw new Error(err);
//   }
// });

// UPDATE

// DELETE

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });