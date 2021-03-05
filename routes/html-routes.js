const Router = require("express").Router();

// We techincally don't need this (server static find 'public' dir), but hey, here it is
Router.get("/", (req, res) => {
    res.render(index.html);
  });

  Router.get("/exercise?", (req, res) => {
    res.render(exercise.html);
  });

  Router.get("/exercise", (req, res) => {});

module.exports = Router;