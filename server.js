// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const htmlRoutes = require("./routes/html-routes");
// const apiRoutes = require("./routes/api-routes");

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes

app.get("/", (req, res) => {
    res.send(index.html);
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });