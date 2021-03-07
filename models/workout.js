const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
                type: String,
                required: "Please select an exercise type",
                trim: true
            },
        name: {
                type: String,
                required: "Please select an exercise name",
                trim: true
            },
        duration: {
                type: Number,
                required: "Please enter a workout duration"
            },
            weight: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            distance: {
                type: Number,
                required: true
            }
        }
    ] 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;