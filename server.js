const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", { userNewUrlParser: true });

app.listen(PORT, () => {
    console.log("App running on port 8080");
  });