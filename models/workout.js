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
                required: "Please select a an exercise type"
            }
        },
        {
            name: {
                type: String,
                required: "Please select a an exercise name"
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
        }
    ] 
});

// {
//     type: String,
//     options: {
//         name: ["resistance", "cardio"],
//         required: "Please select a workout type"
//     }
// },
// exercise: {
//    type: String,
//    required: "Please enter an exercise" 
// },
// duration: {
//     type: Number,
//     required: "Please enter a workout duration",
//     trim: true
// },
// weight: {
//     type: Number,
//     required: "Please enter a weight",
//     trime: true
// },
// reps: {
//     type: Number,
//     required: "Please enter a repetition count",
//     trime: true
// },
// sets: {
//     type: Number,
//     required: "Please enter a set count",
//     trime: true
// },
// distance: {
//     type: Number,
//     required: "Please enter a set count",
//     validate: [({ distance }) => distance > 0, "Distance must have a value greater than 0"],
//     trim: true
// },
// totalDuration: Number

WorkoutSchema.methods.setDate = function() {
    this.setDate = Date.now();
    return this.setDate;
};

WorkoutSchema.methods.getDate = function() {
    this.getDate = this.day;
    return this.getDate;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;