const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    workoutType: {
        type: String,
        options: {
            name: ["resistance", "cardio"],
            required: "Please select a workout type"
        }
    },
    exercise: {
       type: String,
       required: "Please enter an exercise" 
    },
    duration: {
        type: Number,
        required: "Please enter a workout duration"
    },
    weight: {
        type: Number,
        required: "Please enter a weight"
    },
    reps: {
        type: Number,
        required: "Please enter a repetition count"
    },
    sets: {
        type: Number,
        required: "Please enter a set count"
    },
    distance: {
        type: Number,
        required: "Please enter a set count",
        validate: [({ distance }) => distance > 0, "Distance must have a value greater than 0"]
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;