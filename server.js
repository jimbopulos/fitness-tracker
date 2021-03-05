// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// require("./routes/html-routes");
// require("./routes/api-routes");

const db = require("./models");

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

// CREATE

// READ
// route to retrieve last workout

// db.scores.aggregate( [
//   {
//     $addFields: {
//       totalHomework: { $sum: "$homework" } ,
//       totalQuiz: { $sum: "$quiz" }
//     }
//   },
//   {
//     $addFields: { totalScore:
//       { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
//   }
// ] )

app.get("/api/workouts", (req, res) => {
//   db.Workout.aggregate( [
//     { 
//     $addFields: {
//     totalWorkoutDuration: { $sum: "$duration" }
//     }
//   },
//   {
//     $addFields: { totalWorkout: 
//     { $add: [ "$totalWorkoutDuration" ] }
//     }
//   }
//  ] );
  db.Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    };
  }); 
});

// UPDATE

// DELETE

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });