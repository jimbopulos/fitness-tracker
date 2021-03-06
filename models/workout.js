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
                required: "Please select an exercise type"
            }
        },
        {
            name: {
                type: String,
                required: "Please select an exercise name"
            }
        },
        {
            duration: {
                type: Number,
                required: "Please enter a workout duration",
                trim: true
            }
        },
        {
            weight: {
                type: Number,
                required: "Please enter a weight amount",
                trim: true
            }
        },
        {
            reps: {
                type: Number,
                required: "Please enter a repetition count",
                trim: true
            }
        },
        {
            sets: {
                type: Number,
                required: "Please enter a set count",
                trim: true
            }
        },
        {
            distance: {
                type: Number,
                required: "Please enter a distance",
                validate: [({ distance }) => distance > 0, "Distance must have a value greater than 0"],
                trim: true
            }
        },
        {
            totalDuration: Number
        },
        {
            totalWeight: Number
        }
    ] 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;