const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    workoutType: {
        type: String,
        options: {
            name: ["resistance", "cardio"],
            required: "Please select a workout"
        }
    },
    duration: {
        type: Number,
        required: "Please enter a workout duration"
    },
    weight: {
        type: Number,
        required: "Please enter a w"
    },
    reps: {
        type: Number,
        required: "Please enter a repetition count"
    },
    sets: {
        type: Number,
        required: "Please enter a set count"
    },

});