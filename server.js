// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// require("./routes/html-routes");
// require("./routes/api-routes");

const Workout = require("./models/Workout");

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
// route to get all workouts
app.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    };
  }); 
});

// route to retrieve last workout

// UPDATE

// DELETE

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });