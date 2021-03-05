const path = require("path");
const Router = require("express").Router();
// require("../public/exercise")

// Routes to display html
Router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

// Router.get("/exercise?", (req, res) => {
//   res.send(exercise.html);
// });  

// Router.get("/exercise", (req, res) => {
//     res.send(path.join(__dirname, "public"));
// });

module.exports = Router;