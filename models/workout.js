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
            }
        },
        {
            name: {
                type: String,
                required: "Please select an exercise name",
                trim: true
            }
        },
        {
            duration: {
                type: Number,
                required: "Please enter a workout duration"
            }
        },
        {
            weight: {
                type: Number,
                required: "Please enter a weight amount"
            }
        },
        {
            reps: {
                type: Number,
                required: "Please enter a repetition count"
            }
        },
        {
            sets: {
                type: Number,
                required: "Please enter a set count"
            }
        },
        {
            distance: {
                type: Number,
                required: "Please enter a distance",
                validate: [({ distance }) => distance > 0, "Distance must have a value greater than 0"]
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